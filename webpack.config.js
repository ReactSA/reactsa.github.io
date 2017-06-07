var config = {
    entry: './src/index.js', // entry point
    output: {// place where bundled app will be served
        path: __dirname + '/dist',
        publicPath: '/',
        filename: './src/index.js',
        libraryTarget: 'umd'
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // search for js files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
        ]
    }
}
module.exports = config;