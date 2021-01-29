import {
	series, src, dest, plugins
} from "./gulp";
import { readJsonSync } from "fs-extra";

const { zip } = plugins;

export function packSrc() {
	return src("dist/unpacked/**")
		.pipe(zip("No-DLC-Recommendations.zip"))
		.pipe(dest("dist/packed/mods"));
}

export function packArtifact() {
	return src("dist/packed/**")
		.pipe(zip(`No-DLC-Recommendations-v${readJsonSync("package.json").version}.zip`))
		.pipe(dest("dist"));
}

export default series(packSrc, packArtifact);
