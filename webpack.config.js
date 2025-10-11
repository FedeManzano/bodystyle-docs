const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
    filename: 'docs-body.js', // Nombre del archivo empaquetado
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica esta regla a todos los archivos .js
        exclude: /node_modules/, // Ignora la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader para los archivos .js
          options: {
            presets: ['@babel/preset-env'], // Opcionalmente, puedes definir el preset aquí
          },
        },
      },
    ],
  },
  mode: "production"
};
