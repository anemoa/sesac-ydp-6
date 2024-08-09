import React, { Component } from 'react'
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 0,
            visible: true
        };
    }

    changeNumState = () => this.setState({number: this.state.number + 1});
    changeVisibleState = () => this.setState({visible: !this.state.visible});

    
  render() {
    return (
      <div>
        <button onClick={this.changeNumState}>plus</button>
        <button onClick={this.changeVisibleState}>on / off</button>
        {
            this.state.visible && (
            <LifeCycleClassChild number={this.state.number} />
        )}
      </div>
    )
  }
}

// 단축평가 test
// true && anythig anything -> 논리곱
// false && anythig false
// true || anythig true -> 논리합
// false || anythig anythig