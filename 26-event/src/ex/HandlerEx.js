import React, { Component } from 'react'

export default class HandlerEx extends Component {

    state = {
        text: 'hello world',
    }

  render() {

    const {text} = this.state;

    return (
      <div>
        {text}
        <button onClick={() => {
            this.setState({text: 'goodbye world'})
        }}>클릭</button>
      </div>
    )
  }
}
