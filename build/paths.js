const src = "src";
const dist = "dist";

module.exports = {
    ts: {
        src: `${src}/**/*.ts`,
        dest: `${dist}/`
    },
    html: {
        src: `${src}/**/*.html`,
        dest: `${dist}/`
    },
    sass: {
        src: `${src}/main.scss`,
        dest: `${dist}/css`,
        watch: `${src}/**/*.scss`
    }
}