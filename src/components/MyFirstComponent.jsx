import React, { Component } from 'react';

export class MyFirstComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        };
    }
    componentDidMount() {
        setTimeout(() => {
            let rand = Math.floor(Math.random() * 5)
            this.setState({
                counter: rand
            })
        }, 2000)
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }

    style = {
        color: 'red',
        fontSize: 50,
        backroundColor: 'blue'
    }

    render() {
        return (
            <div style={this.style}>
                <p> Petainw {this.state.counter} </p>
            </div>
        )
    }
}