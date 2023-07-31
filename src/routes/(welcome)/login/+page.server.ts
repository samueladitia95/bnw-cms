import { error, type Actions, fail } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import { ZodError, z } from "zod";

const loginSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.min(1, { message: "Email is required" })
		.max(64, { message: "Email must be less than 64 characters" })
		.email({ message: "Email must be a valid email address" }),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters" })
		.max(32, { message: "Password must be less than 32 characters" })
		.trim()
});

export const actions = {
	login: async ({ locals, request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			const { email, password } = loginSchema.parse(formData);

			await locals.pb.collection("users").authWithPassword(email, password);
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				return fail(400, {
					message: "Zod Error",
					errors
				});
			} else if (err instanceof ClientResponseError) {
				throw error(err.status, {
					message: err.message
				});
			} else {
				throw error(500, {
					message: "Please Refresh The Page"
				});
			}
		}
	}
} satisfies Actions;
