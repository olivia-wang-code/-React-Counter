import React from 'react';
const { default: Counter } = require("../Counter/Counter");

class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 };
    }
    handelResize = (event) => {
        if(event.target.value==this.state.size){
            return null;
        }
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalValue:0
        })
    }
    handelIncrease = () => {
        this.setState((preState) => (
            {
                totalValue: preState.totalValue + 1
            }
        ))
    }
    handelReduce = () => {
        this.setState((preState) => (
            {
                totalValue: preState.totalValue - 1
            }
        ))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return (
            <div>
                <div>
                    <label>
                    GroupSize:
                    <input onBlur={this.handelResize}></input>
                    </label>
                </div>
                <div>
                    <label>
                    Total Number: {this.state.totalValue}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter groupsize={this.state.size} onIncrease={this.handelIncrease} onReduce={this.handelReduce} key={key} />)
                }
            </div>
        )
    }
}
export default CountGroup;