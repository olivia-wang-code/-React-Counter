import React from 'react';
const { default: Counter } = require("../Counter/Counter");

class CountGroup extends React.Component{
    constructor(props){
        super(props);
        this.size=6
    }
    render(){
        const initArray=[...Array(this.size).keys()]
        return (<div>
            {initArray.map(key=><Counter key={key}/>)}
        </div>);
    }
}
export default CountGroup;