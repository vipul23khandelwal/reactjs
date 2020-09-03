import React, {Component} from 'react';

class Visitor extends Component {
constructor(){
    super()
    this.state = {
message : 'welcome visitor'
    }
}

changetext(){
    this.setState({
        message : 'thanks for subscribing'
    })
}

render(){
return(
    <div>
<h1>{this.state.message}</h1>
<button onClick={() => this.changetext()}>Subscribe</button>
</div>
)
}
}

export default Visitor;