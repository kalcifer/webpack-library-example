module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          idHint: 'vendors'
        }
      }
    }
  }
};
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          idHint: 'vendors'
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          enforce: true
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          filename: 'js/[name]/bundle.js'
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          filename: (chunkData) => {
            // Use chunkData object for generating filename string based on your requirements
            return `${chunkData.chunk.name}-bundle.js`;
          }
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          filename: '[name].bundle.js'
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test(module, chunks) {
            //...
            return module.type === 'javascript/auto';
          }
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        json: {
          type: 'json'
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          reuseExistingChunk: true
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all'
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks (chunk) {
        // exclude `my-excluded-chunk`
        return chunk.name !== 'my-excluded-chunk';
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }
};
WEBPACK
GUIDES
Guides
Getting Started
Asset Management
Output Management
Development
Code Splitting
Caching
Authoring Libraries
Environment Variables
Build Performance
Content Security Policies
Development - Vagrant
Dependency Management
Installation
Scaffolding
Hot Module Replacement
Tree Shaking
Production
Lazy Loading
Shimming
TypeScript
Progressive Web Application
Public Path
Integrations
Asset Modules
Advanced Entry
API
Introduction
Command Line Interface
Node Interface
Stats Data
Hot Module Replacement
Loader Interface
Logger Interface
Module Methods
Module Variables
Compilation Object
Compiler Hooks
Compilation Hooks
JavascriptParser Hooks
Plugin API
Resolvers
PLUGINS
Plugins
AutomaticPrefetchPlugin
BabelMinifyWebpackPlugin
BannerPlugin
ClosureWebpackPlugin
CommonsChunkPlugin
CompressionWebpackPlugin
ContextReplacementPlugin
CopyWebpackPlugin
DefinePlugin
DllPlugin
EnvironmentPlugin
EvalSourceMapDevToolPlugin
ExtendedAPIPlugin
ExtractTextWebpackPlugin
HashedModuleIdsPlugin
HotModuleReplacementPlugin
HtmlWebpackPlugin
I18nWebpackPlugin
IgnorePlugin
Internal Webpack Plugins
LimitChunkCountPlugin
MinChunkSizePlugin
MiniCssExtractPlugin
ModuleConcatenationPlugin
NormalModuleReplacementPlugin
NpmInstallWebpackPlugin
PrefetchPlugin
ProfilingPlugin
ProgressPlugin
ProvidePlugin
SourceMapDevToolPlugin
SplitChunksPlugin
StylelintWebpackPlugin
TerserWebpackPlugin
UglifyjsWebpackPlugin
WatchIgnorePlugin
ZopfliWebpackPlugin
CONCEPTS
Concepts
Entry Points
Output
Loaders
Plugins
Configuration
Modules
Module Resolution
Dependency Graph
Targets
The Manifest
Hot Module Replacement
Why Webpack
CONFIGURATION
Configuration
Configuration Languages
Configuration Types
Entry And Context
Mode
Output
Module
Resolve
Optimization
Plugins
DevServer
Devtool
Target
Watch And WatchOptions
Externals
Performance
Node
Stats
Experiments
Other Options
CONTRIBUTE
Contribute
Writer's Guide
Writing A Loader
Writing A Plugin
Writing A Scaffold
Plugin Patterns
Release Process
Debugging
MIGRATE
Migrate
To V5 From V4
To V4 From V3
To V2 Or V3 From V1
LOADERS
Loaders
Babel-Loader
Bundle-Loader
Cache-Loader
Coffee-Loader
Coffee-Redux-Loader
Coverjs-Loader
Css-Loader
Eslint-Loader
Exports-Loader
Expose-Loader
Extract-Loader
File-Loader
Gzip-Loader
Html-Loader
I18n-Loader
Imports-Loader
Istanbul-Instrumenter-Loader
Jshint-Loader
Json-Loader
Json5-Loader
Less-Loader
Mocha-Loader
Multi-Loader
Node-Loader
Null-Loader
Polymer-Webpack-Loader
Postcss-Loader
Raw-Loader
React-Proxy-Loader
Restyle-Loader
Sass-Loader
Script-Loader
Source-Map-Loader
Style-Loader
Svg-Inline-Loader
Thread-Loader
Transform-Loader
Url-Loader
Val-Loader
Worker-Loader
Yaml-Frontmatter-Loader
COMPARISON
BRANDING GUIDELINES
GLOSSARY
VOTE
LICENSE
SplitChunksPlugin
Originally, chunks (and modules imported inside them) were connected by a parent-child relationship in the internal webpack graph. The CommonsChunkPlugin was used to avoid duplicated dependencies across them, but further optimizations were not possible.

Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.

Defaults
Out of the box SplitChunksPlugin should work well for most users.

By default it only affects on-demand chunks, because changing initial chunks would affect the script tags the HTML file should include to run the project.

webpack will automatically split chunks based on these conditions:

New chunk can be shared OR modules are from the node_modules folder
New chunk would be bigger than 30kb (before min+gz)
Maximum number of parallel requests when loading chunks on demand would be lower or equal to 6
Maximum number of parallel requests at initial page load would be lower or equal to 4
When trying to fulfill the last two conditions, bigger chunks are preferred.

Configuration
webpack provides a set of options for developers that want more control over this functionality.

The default configuration was chosen to fit web performance best practices, but the optimal strategy for your project might differ. If you're changing the configuration, you should measure the impact of your changes to ensure there's a real benefit.

optimization.splitChunks
This configuration object represents the default behavior of the SplitChunksPlugin.

webpack.config.js

module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};const path = require('path');

export default () => (
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'webpack-numbers.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            // libraryExport: 'default',
            library: 'webpackNumbers'
        },
        externals: {
            'lodash': {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
    }
);
