import { superValidate } from "sveltekit-superforms/client";
import { z } from "zod";

export const _loginSchema = z.object({
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

export const load = async () => {
	// Server API:
	const form = await superValidate(_loginSchema);

	// Always return { form } in load and form actions.
	return { form };
};
