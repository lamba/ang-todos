var 
    gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task('sass', function() {
    gulp.src('ang-todos.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'));
});
