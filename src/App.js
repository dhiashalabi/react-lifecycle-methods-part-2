// https://scrimba.com/g/greacthooks

import React from "react";
import randomColor from "randomcolor";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            const newColor = randomColor();
            this.setState({ color: newColor });
        }
    }

    render() {
        console.log("Render");
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        );
    }
}

