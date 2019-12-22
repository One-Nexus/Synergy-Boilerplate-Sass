import Autoprefixer from 'autoprefixer';
import SynergySassImporter from '@onenexus/synergy-sass-importer';

export default () => ({
  entry: './src/index.js',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader', 
            options: {
              plugins: () => [Autoprefixer]
            }
          },
          {
            loader: 'sass-loader', 
            options: {
              sassOptions: {
                importer: SynergySassImporter,
                outputStyle: 'expanded',
              }
            }
          },
          {
            loader: 'sass-resources-loader', 
            options: {
              resources: './src/index.scss',
            }
          }
        ]
      }
    ]
  }
});