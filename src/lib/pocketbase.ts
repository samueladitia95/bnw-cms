import PocketBase from "pocketbase";

export function createInstance() {
	return new PocketBase("http://18.143.227.53:80");
}

export const pb = createInstance();
