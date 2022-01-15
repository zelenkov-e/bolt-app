const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        modules: [path.join(__dirname, "src"), "node_modules"],
        alias: {
            react: path.join(__dirname, "node_modules", "react"),
        },
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff(2)?|ttf|eot)$/i,
                use: [
                    {
                        options: {
                            name: "[name].[ext]",
                            outputPath: "content/images/",
                        },
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'build/index.html'
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
        }),
    ],
};
