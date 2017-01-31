const gulp = require("gulp");
const del = require("del");
const bundler = require("aurelia-bundler");
const bundles = require("../bundle-config");

const config = {
    force: true,
    baseURL: "./",
    configPath: "./config.js",
    bundles: bundles.bundles
}

gulp.task("bundle", () => {
    del("dist/bundles/*.js").then(paths => {
        console.log("Deleted files:\n", paths.join("\n"))
        bundler.bundle(config);
    });
});

gulp.task("unbundle", () => {
    bundler.unbundle(config);
});
