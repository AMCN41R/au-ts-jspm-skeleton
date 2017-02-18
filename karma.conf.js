module.exports = function (config) {
    config.set({
        basePath: "./",
        frameworks: ["systemjs", "mocha" ],
        "systemjs": {
            configFile: "config.js",
            config: {
                paths: {
                    "*": "*",
                    "src/*": "src/*",
                    "typescript": "node_modules/typescript/lib/typescript.js",
                    "systemjs": "node_modules/systemjs/dist/system.js",
                    "system-polyfills": "node_modules/systemjs/dist/system-polyfills.js",
                    "testdouble": "node_modules/testdouble/dist/testdouble.js"
                },
                packages: {
                    "test": {
                        defaultExtension: "ts"
                    },
                    "src": {
                        defaultExtension: "ts"
                    }
                },
                transpiler: "typescript"
            },
            serveFiles: [
                "src/**/*.*",
                "jspm_packages/**/*.js",
                "jspm_packages/**/*.json"
            ]
        },
        "files": [
            "test/setup.ts",
            {"pattern": "test/*.ts"},
            {"pattern": "test/**/*.ts"}
        ],
        exclude: [],
        preprocessors: {},
        reporters: ["mocha"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["PhantomJS"],
        singleRun: true
    });
};