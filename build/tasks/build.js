const gulp = require("gulp");
const sass = require("gulp-sass");
const ts = require("gulp-typescript");
const maps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const argv = require("yargs").argv;
const paths = require("../paths");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("set:environment", () => {
    let env = "dev";
    
    if(argv.prod) {
        env = "prod";
    }

    gulp
        .src(`build/environments/${env}.ts`)
        .pipe(rename("env.ts"))
        .pipe(gulp.dest("src/"));
});

gulp.task("build:html", () => {
    gulp
        .src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task("watch:html", () => {
    gulp.watch(paths.html.src,[ "build:html"])
});

gulp.task("build:sass", () => {
    gulp
        .src(paths.sass.src)
        .pipe(maps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(maps.write("./"))
        .pipe(gulp.dest(paths.sass.dest));
});

gulp.task("watch:sass", () => {
    gulp.watch(paths.sass.watch, ["build:sass"])
});

gulp.task("build:ts", () => {
    tsProject
        .src()
        .pipe(maps.init())
        .pipe(tsProject())
        .pipe(maps.write("./"))
        .pipe(gulp.dest(paths.ts.dest));
});

gulp.task("watch:ts", () => {
    gulp.watch(paths.ts.src, ["build:ts"])
});

gulp.task("build", [
    "build:ts",
    "build:sass",
    "build:html"
]);

gulp.task("watch", [
    "watch:ts",
    "watch:html",
    "watch:sass"
]);


