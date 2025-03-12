// Arquivo de configuração do webpack
// Quem vai executar o arquivo é o Node.js. Por isso, podemos usar o CommonJS ao invés do ES6
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development', // Modo de execução do webpack. Pode ser 'development' ou 'production'
  entry: path.resolve(__dirname, 'src', 'index.js'), // O uso de path ou o caminho relativo do arquivo vai depender do filesystem do OS. Por isso, é recomendado usar o path para garantir que o caminho seja correto
  output: { // Onde o arquivo de saída será gerado e qual será o nome dele
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js', // O hash é um código gerado pelo webpack que muda toda vez que o arquivo é alterado. Isso é útil para evitar cache
  },
  plugins: [
    new HtmlWebpackPlugin({ // Este plugin gera um arquivo HTML automaticamente e insere o arquivo de saída gerado pelo webpack
      template: path.resolve(__dirname, 'public', 'index.html'), // O arquivo de template que será usado para gerar o arquivo final
    }),
    new CleanWebpackPlugin(), // Este plugin limpa a pasta de build toda vez que o webpack é executado
  ],
  module: { // Aqui definimos como o webpack deve se comportar ao encontrar cada tipo de arquivo. Loaders são usados para transpilar arquivos de diferentes tipos
    rules: [ // Aqui vão as regras para o webpack saber o que fazer com cada tipo de arquivo
      {
        test: /\.js$/, 
        exclude: /node_modules/, // Aqui definimos que o Babel não deve transpilar os arquivos dentro da pasta node_modules
        use: 'babel-loader', // Aqui definimos que o webpack deve usar o Babel para transpilar todos os arquivos .js
      }, 
      {
        test: /\.css$/, // Aqui definimos que o webpack deve transpilar os arquivos .css
        use: [ // Aqui definimos que o webpack deve usar o style-loader e o css-loader para transpilar os arquivos .css
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true, // Habilita o uso de módulos CSS
            },
          },
        ], 
      },
    ],
  },
  devServer: {
    port: 3000, // Porta onde o servidor de desenvolvimento será executado
  }
};
