var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome_disable_gpu'],
        customLaunchers: {
            Chrome_disable_gpu: {
                base: 'Chrome',
                flags: ['--disable-gpu']
            }
        },
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};