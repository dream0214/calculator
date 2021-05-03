import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
      super(props);
      this.state={number:0};
    }
    plusNumber=()=>{
        this.setState({
            number:this.state.number+1,
        });
    };
    minusNumber=()=>{
        this.setState({
            number:this.state.number-1,
        });
    };
    render(){
        return (
            <div>
                <h1>Count</h1>
                <h2>값:{this.state.number}</h2>
                <button className="plus" onClick={this.plusNumber}>plus</button>
                <button className="minus" onClick={this.minusNumber}>minus</button>
            </div>
        )
    }
  }

  export default Counter;