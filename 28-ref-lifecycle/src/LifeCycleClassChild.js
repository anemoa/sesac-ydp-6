import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
  componentDidMount() {
    console.log('컴포넌트 마운트! 🔵');
  }

  componentDidUpdate(){
    console.log('컴포넌트 업데이트! 🟢');
  }

  componentWillUnmount(){
    console.log('컴포넌트 언마운트! 🔴');
  }
  render() {
    return (
      <div>
        자식이다
        <p>현재 num 값은 {this.props.number} 이다</p>
      </div>
    );
  }
}
