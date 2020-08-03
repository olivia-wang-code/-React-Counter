import React from 'react'
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={value:0,groupsize:0};
    }
    onIncrease=()=>{
        this.setState((preState)=>(
            {
                value:preState.value+1
            }

        ))
        this.props.onIncrease();
    }
    onReduce=()=>{
        this.setState((preState)=>(
            {
                value:preState.value-1
            }
        ))
        this.props.onReduce();
    }
    static getDerivedStateFromProps(props,state){
        if(props.groupsize!=state.groupsize){
            return {
                value:0,
                groupsize:props.groupsize
            };
        }
    }
    render(){
        return (<div>
            <button onClick={this.onReduce}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.onIncrease}>+</button>
        </div>);
    }
}
export default Counter;