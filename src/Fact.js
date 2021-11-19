// added this in for my practice

import React, {Component} from 'react'

export default class Fact extends Component {

    state = {
        count: 1
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        {
            this.state.count != 1 ? 
            this.setState({
                count: this.state.count - 1
            }) :
            this.setState({
                count: this.state.count
            })
        }

    }


    render() {
        return(
            <div>
                <button onClick={() => this.decrement()}>-</button> Fun Fact {this.state.count}: The Sky is {this.state.color}! <button onClick={() => this.increment()}>+</button>
            </div>
        )
    }
}