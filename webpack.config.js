/**
 * Created by igorpugachev on 13.05.16.
 */

module.exports = {
    context: __dirname + "/app",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {test: /\.css$/, loader: "style!css"},
        ]
    }
};