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
/*var gulp = require("gulp"),
    connect = require("gulp-connect");
gulp.task("server", function () {
   connect.server({
       root:"dist",
       port:8888,
       livereload:true
   })
});
gulp.task("html", function () {
   gulp.src("app/!*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
});
gulp.task("watch", function () {
   gulp.watch("app/!*.html",["html"])
});
gulp.task("default",["server","watch"]);*/


var gulp = require("gulp");
var connect = require("gulp-connect");
gulp.task("server", function () {
    connect.server({
        root:"dist",
        port:7777,
        livereload:true
    })
});
gulp.task("copy-html", function () {
   gulp.src('app/*.html').pipe(gulp.dest('dist')).pipe(connect.reload())
});
gulp.task("watch", function () {
    gulp.watch('app/*.html',["copy-html"])
});
gulp.task("default",["server","watch","copy-html"]);
/*gulp.task("server", function () {
    connect.server({
        root:'dist',//服务器的根目录
        port:8080,//服务器的地址，没有此配置是8080
        livereload:true
    })
});
gulp.task("copy-html", function () {
    gulp.src('app/!*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});
gulp.task("watch",function(){
    gulp.watch('app/index.html',["copy-html"])
});
gulp.task("default",["server","watch"]);*/


/*var gulp= require("gulp");
gulp.task("cope-html", function () {
    gulp.src('app/!*.html')
    .pipe(gulp.dest('dist'))
})*/
