const gulp = require("gulp");

gulp.task("connect", function(){
  const connect = require("gulp-connect");
  connect.server({
    root: "app",
    port: 8888
  });
});

gulp.task("default", ["connect"]);
