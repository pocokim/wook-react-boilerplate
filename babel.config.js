// babel.config.js
module.exports = function(api) {
  api.cache(true);
  // 여기 프리셋 및 플러그인에 추가한 것들을 babel-loader를 통해 webpack에서 사용한다.
  const presets = [['@babel/preset-env'], ['@babel/preset-react']];

  const plugins = [
    'react-hot-loader/babel',
    // class property 
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
};