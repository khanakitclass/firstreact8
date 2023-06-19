import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        if (this.state.count < 5) {
            this.setState({
                count: this.state.count + 1
            })            
        }
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    
    render() {
        return (
            <div>
                <button disabled={this.state.count < 5 ? false : true} onClick={this.handleIncrement}>+</button>
                <span> {this.state.count} </span>
                <button disabled={this.state.count === 0 ? true : false} onClick={this.handleDecrement}>-</button>
            </div>
        );
    }
}

export default Counter;