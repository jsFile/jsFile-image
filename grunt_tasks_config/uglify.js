module.exports = function () {
    return {
        options: {
            compress: true,
            report: false
        },
        engine: {
            'src': 'dist/jsfile-image.js',
            'dest': 'dist/jsfile-image.min.js'
        }
    };
};