import React, { Component } from 'react';
import Color from './Color';

export class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 3,
            circleSize:10
        }
        this.changeWidth = this.changeWidth.bind(this);
    }

    changeWidth(e) {
        this.setState({
            width: e.target.value,
            circleSize: 10+(e.target.value*.8)
        })
        console.log(this.state.width);
        this.props.setWidth(this.state.width);
    }
    render() {
        
        //const current_colors = this.props.colors;
        const current_colors = this.props.colors.map(color => {
            return (
            <Color hue={color} onChoose={this.props.handleChange} />
            )
            });
        
        return (
            
            <div>
                
                <div id="colors">
                    {current_colors}
                </div>
                <svg className="selected-color" height="50" width="50">
                    <circle cx="20" cy="20" r={this.state.circleSize} fill={this.props.selectedColor} />
                </svg>
                <input 
                    className="slider" 
                    type="range" 
                    min="0" 
                    max="11" 
                    value={this.state.width}
                    onChange={this.changeWidth}>
                </input>
            </div>
        )
    }
}

export default Colors
