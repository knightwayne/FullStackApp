const path = require("path")

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR+"/app.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        // publicPath: '/'
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js?/,  //for js files
                include: SRC_DIR, //in this src directory
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader', //use babel loader 
                        options: {presets: ["@babel/preset-react", "@babel/preset-env"]}
                    }
            },
            {
                test: /\.css/, //for css files
                use: {loader: 'css-loader'} //use css loader
            }
            ]        
    },
    devServer: {
        hot: true,
        static: {directory: SRC_DIR},
        historyApiFallback: true
    }
}

module.exports = config;