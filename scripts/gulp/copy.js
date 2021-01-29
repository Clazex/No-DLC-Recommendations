import { parallel, src, dest } from "./gulp";

export function copySrc() {
	return src("src/**")
		.pipe(dest("dist/unpacked/"));
}

export function copyDescriptor() {
	return src("assets/*.mod")
		.pipe(dest("dist/packed"));
}

export default parallel(copySrc, copyDescriptor);
