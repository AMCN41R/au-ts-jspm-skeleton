module.exports = {
    "bundles": {
        "dist/bundles/app-bundle": {
            "includes": [
                "[**/*.js]",
                "**/*.html!text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        },
        "dist/bundles/vendor-bundle": {
            "includes": [
                "aurelia-framework",
                "aurelia-bootstrapper",
                "aurelia-router",
                "aurelia-http-client",
                "aurelia-pal-browser",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "aurelia-logging-console",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-templating-binding",
                "jquery",
                "bootstrap"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": false,
                "rev": true
            }
        }
    }
}