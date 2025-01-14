var path = require('path');

module.exports = [
    {
        entry: './lib-es6/index.spec.js',
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.test.js"
        },
        target: "web",
        mode: "development",
        module: {
            rules: [{
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './dist/[name].[ext]'
                    }
                }]
            }]
        }
    }, {
        entry: './lib-es6/index.node.spec.js',
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.node.test.js"
        },
        target: "node",
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }, {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: './dist/[name].[ext]'
                        }
                    }]
                }]
        }
    }

]
