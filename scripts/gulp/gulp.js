import _gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";

export const plugins = gulpLoadPlugins();

export function src(glob, options) {
	return _gulp.src(glob, options)
		.pipe(plugins.plumber());
}

export {
	dest,
	symlink,
	lastRun,
	series,
	parallel,
	watch,
	task,
	registry,
	tree
} from "gulp";

export const gulp = {
	..._gulp,
	src,
	plugins,
	_src: _gulp.src
};

export default gulp;
