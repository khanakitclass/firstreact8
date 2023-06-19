import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        
        //1
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }
    
    //3.
    componentDidMount = () => {
        this.timedata = setInterval(this.tick, 1000);
    }

    //5.
    componentDidUpdate = (prepvProps, prevState) => {
        if (prevState.time !== this.state.time) {
            console.log("componentDidUpdate called");
        }
    }

    //6.
    componentWillUnmount = () => {
        clearInterval(this.timedata);
    }


    //2.  //4.
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;