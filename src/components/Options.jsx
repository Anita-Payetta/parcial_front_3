import React from "react";

class Options extends React.Component{
    onClickoption(option) {
        this.props.onSelectedOption(option);  
    }
    componentWillUnmount(){
        alert("No te pongas ansioso...acepta esto y llegarás al final de TU historia!");
    }
    render() {
        const variableA= this.props.optionAText;
        const variableB= this.props.optionBText;
        return(
            <div className="options">
                <div className="option">
                    <button className="button" onClick={()=>this.onClickoption("a")}>A</button>
                    <span>{variableA}</span>
                </div>
                <div className="option">
                    <button className="button" onClick={()=>this.onClickoption("b")}>B</button>
                    <span>{variableB}</span>
                </div>
            </div>
        );
    }
}

export default Options;

