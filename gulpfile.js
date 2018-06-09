var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Good. you have created gulp");
});
gulp.task('html', function(){
	console.log("Image something usefull being done to your HTML hear");
});
gulp.task('styles', function(){
	console.log("Image Sass or PostCss tasks running here. ");
});
gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});
