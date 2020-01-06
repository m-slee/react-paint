import React, { Component } from 'react'

export class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.hue
        }
        this.choose = this.choose.bind(this);
    }

    choose() {
        this.props.onChoose(this.state.color);
    }
    render() { 
    return (
      <div onClick={this.choose} className="color" style={{backgroundColor:this.props.hue}}></div>
    )
  }
}

export default Color;
