import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {

  
  // 클래스형 컴포넌트는 render 함수 필수!
  render() {

      const {vaild, text} = this.props;

      return (
          <>
            <p>
              {text}
            </p>
            <button onClick={() => console.log(vaild)}>버튼</button>
          </>
      );
  }

  static defaultProps = {
      text: '이건 기본 text props입니다'
  }

  static propTypes = {
      text: PropTypes.string
  }
}





function App() {
  return (
    <div className="App">
      
      <ClassComponent text='hi' vaild='콘솔 띄우기 성공!' />
    </div>
  );
}

export default App;
