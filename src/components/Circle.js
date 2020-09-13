import React, { Component } from 'react'

class Circle extends Component {
    render() {
    var heading = {
            padding: 10,
            margin: 20,
            display: 'inline-block',
            borderRadius: '50%',
            width: 100,
            height: 100,
            backgroundColor: this.props.color,
        }

        
        return (
            <div style={heading}></div>
        )
    }
}

export default Circle 



