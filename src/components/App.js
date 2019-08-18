import { hot } from 'react-hot-loader/root';
import React from 'react';

const App = props => {
  return ( <div> 안녕하세요 저는 wook 입니다 </div> );
};

// export 할 때 hot 함수를 실행시켜 내보낸다
export default hot(App);