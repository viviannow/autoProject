// 引入 gulp 与组件
var gulp = require('gulp'), 
    sass = require('gulp-sass'), /*sass*/
    autoprefixer = require('gulp-autoprefixer'), /*自动加前缀*/
    minifyCSS = require('gulp-minify-css'), /*css压缩*/
    lint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'), /*重命名*/
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// css任务进程 expanded   nested   compact   compressed

gulp.task('process-style',function(){
  return gulp.src('src/scss/*.scss')/*用这个方法来读取你需要操作的文件  ,当有多个匹配模式时，该参数可以为一个数组*/
    .pipe(sass({style:'compact'}).on('error', sass.logError)) /*压缩模式*/
    .pipe(autoprefixer('last 2 version')) /*前缀 版本*/
    .pipe(gulp.dest('dest/css/')) /*导出原文件*/
    .pipe(rename({suffix:'.min'}))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('dest/css/')); /*导出压缩 得命名后的文件*/
});


//js 任务进程
gulp.task('process-scripts',function(){
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))

    .pipe(gulp.dest('dest/js/'))
    .pipe(rename({suffix:'.modifide'}))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js/'));

});

// watch任务进程,监视样式与js进程  用来监视文件的变化，当文件发生变化后，我们可以利用它来执行相应的任务，例如文件压缩等
gulp.task('watch',function(){
  gulp.watch(['src/scss/*.scss','src/js/*.js'],['process-style','process-scripts']);
});

// 默认任务
gulp.task('default', function(){
    gulp.run('process-style', 'process-scripts', 'watch');

    console.log('I have configured a gulpfile');
});
