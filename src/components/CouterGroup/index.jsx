import React from 'react';
import { connect } from 'react-redux';
const { default: Counter } = require("../Counter/Counter");

class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 };
    }
    handelResize = (event) => {
        if (event.target.value < 0) {
            return null;
        }
        if (event.target.value == this.state.size) {
            return null;
        }
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalValue: 0
        })
        this.props.resetTotalnumber();
    }
    // handelIncrease = () => {
    //     this.setState((preState) => (
    //         {
    //             totalValue: preState.totalValue + 1
    //         }
    //     ))
    // }
    // handelReduce = () => {
    //     this.setState((preState) => (
    //         {
    //             totalValue: preState.totalValue - 1
    //         }
    //     ))
    // }
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
                        Total Number: {this.props.sum}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter groupsize={this.state.size} onIncrease={this.props.increaseNumber} onReduce={this.props.decreaseNumber} key={key} />)
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {sum:state.sum};
};
const mapDispatchToProps = dispatch => ({
    increaseNumber:(number)=>dispatch({type:'INCREMENT',number:number}),
    decreaseNumber:(number)=>dispatch({type:'DECREMENT',number:number}),
    resetTotalnumber:()=>dispatch({type: 'RESET'})
});
export default connect(mapStateToProps, mapDispatchToProps)(CountGroup);