/**
babel.config.js with useful plugins. 
*/
module.exports = function (api) {
  api.cache(true);
  api.assertVersion('^7.4.5');

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
          node: true,
        },
      },
    ],
    ['@babel/preset-react'],
  ];
  const plugins = [
    [
      '@babel/plugin-proposal-decorators',
      {
        decoratorsBeforeExport: true,
      },
    ],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'hack', topicToken: '%' }],
  ];

  return {
    babelrcRoots: __dirname,
    presets,
    plugins,
  };
};
