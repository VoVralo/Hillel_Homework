const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: 'D:\Hillel\Course2\Lesson2\Classwork\main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
   rules: [
     {
           test: /\\.js$/,  // Збірка для JavaScript файлів
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env']
         }
       }
     }
   ]
 },

 module: {
   rules: [
     {
       test: /\\.css$/,  // Збірка для CSS файлів
       use: [
         MiniCssExtractPlugin.loader,
         'css-loader'
       ]
     }
   ]
 },
 plugins: [
   new MiniCssExtractPlugin({
     filename: 'styles.css'
   })
 ],

 module: {
   rules: [
     {
       test: /\\.(png|jpe?g|gif|svg)$/,  // Збірка для зображень
       use: [
         {
           loader: 'file-loader',
           options: {
             outputPath: 'images'
           }
         },
         'image-webpack-loader'
       ]
     }
   ]
 }

};
