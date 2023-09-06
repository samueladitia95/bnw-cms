import PocketBase from "pocketbase";

export function createInstance() {
	return new PocketBase("https://dev2.samueladitia.com/");
}

export const pb = createInstance();
