/*
gulp插件

 编译 Sass：gulp-sass
 编译 Less：gulp-less
 合并文件：gulp-concat
 压缩js 文件：gulp-uglify
 重命名js文件：gulp-rename
 优化图像大小：gulp-imagemin
 压缩css 文件：gulp-minify-css
 创建本地服务器：gulp-connect
 实时预览 gulp-connect

* */


/*

var gulp = require("gulp");
var connect = require("gulp-connect");//运行liveload服务器
var browserify=require("gulp-browserify");//拼接在一起让浏览器也可以用require方式构建
var concat=require("gulp-concat");//讲文件拼接在一起

gulp.task("server", function () {
    connect.server({
        root:"dist",
        port:9090,
        livereload:true
    })
});
gulp.task("js", function () {
   gulp.src("./app/!**!/!*.js")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
});
gulp.task("html",function(){
   gulp.src("./app/!**!/!*.html")
    .pipe(connect.reload())
});
gulp.task("watch", function () {
   gulp.watch('./dist/!**!/!*.js',["js"]);
   gulp.watch('./app/!**!/!*.html',["html"]);
});
gulp.task("default",["server","watch"]);
*/


var gulp = require("gulp");
var connect = require("gulp-connect");//运行liveload服务器
var browserify=require("gulp-browserify");//拼接在一起让浏览器也可以用require方式构建
var concat=require("gulp-concat");//讲文件拼接在一起
gulp.task("server", function () {
    connect.server({
        root:'dist',//服务器的根目录
        port:8080,//服务器的地址，没有此配置是8080
        livereload:true
    })
});
gulp.task("copy-html", function () {
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});
gulp.task("watch",function(){
    gulp.watch('app/index.html',["copy-html"])
});
gulp.task("default",["server","watch"]);

