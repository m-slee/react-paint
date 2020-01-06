import React, { Component } from 'react';
import Color from './Color';
import Colors from './Colors';

export class Canvas extends Component {
    constructor(props) {
        super(props);
        //this.colors = ['blue', 'red', 'green', 'orange', 'purple', 'black']
        this.colors = ['#6117FF', '#B321F8', '#55A6B1', '#54831A', ' #DB4F60', '#E4CE56', '#FD965C', '#F82195', '#17FFC7', '#21AAF8', '#7EE000', '#F85521', '#FFFFFF', '#000000']
        this.state = {
            colors: ['blue', 'red', 'green', 'orange'],
            currentColor: '#6117FF',
            strokes: [],
            isDrawing: false,
            lastX: 800,
            lastY: 800,
            direction: true,
            thickness: 3
        }
        this.onColorChange = this.onColorChange.bind(this);
        this.draw = this.draw.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.changeWidth = this.changeWidth.bind(this);
        
    }

    
    changeWidth(width) {
        this.setState({
            thickness: width
        })
    }
    // pass as props to color components
    onColorChange(color) {
        
       
        console.log(color)
        this.setState({
            currentColor: color//e.target.style.backgroundColor
        });
    }

    draw(e) {
        if (!this.state.isDrawing) return; // stop the fn from running when they are not moused down
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        //console.log(e);
        //ctx.strokeStyle = `hsl(${this.state.currentColor}`;
        ctx.lineWidth = this.state.thickness;
        ctx.strokeStyle = this.state.currentColor;
        ctx.beginPath();
        // start from
        const beforeMove = [this.state.lastX, this.state.lastY];
        ctx.moveTo(this.state.lastX, this.state.lastY);
        // go to
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
        [this.state.lastX, this.state.lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
        
    }


    mouseDown(e) {
        this.setState({
            isDrawing: true,
            lastX: e.nativeEvent.offsetX,
            lastY: e.nativeEvent.offsetY
        })
    }

    /*<Color hue="blue" onClick={this.onColorChange} />
                <Color hue="red" onClick={this.onColorChange} />
                <Color hue="green" onClick={this.onColorChange} />*/

    render() {
        //<p>Current Color: {this.state.currentColor}</p>
        return (
            <div className="test">
                <div>
            <Colors 
                selectedColor={this.state.currentColor}
                colors={this.colors}
                handleChange={this.onColorChange}
                setWidth={this.changeWidth} 
            />
            </div>

            <div>
                
               
                <canvas 
                    width={1350}
                    height={650}
                    ref="canvas" 
                    id="draw" 
                    onMouseMove={this.draw} 
                    onMouseDown={this.mouseDown}
                    onMouseUp={() => this.setState({isDrawing:false })}
                    onMouseOut={() => this.setState({isDrawing:false })}>
                </canvas>
               
            </div>
            </div>
        )
    }
}

export default Canvas
