const gulp = require("gulp");
var tslint = require("tslint");

gulp.task("lint", () => {
    gulp
        .src(["./src/**/*.ts", "!**/*.d.ts"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});
