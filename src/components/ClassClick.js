import React, { Component } from 'react'

export default class ClassClick extends Component {
clickhandler(){
    console.log('button clicked')
}

    render() {
        return (
            <div>
                <button onClick={this.clickhandler}> Click me</button>
            </div>
        )
    }
}
