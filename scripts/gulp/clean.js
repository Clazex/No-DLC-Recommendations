import { parallel } from "./gulp";
import { emptyDir } from "fs-extra";

export function cleanDist() {
	return emptyDir("dist");
}

export default parallel(cleanDist);
