import React, { createRef } from "react";

export default class RefsClass extends React.Component {
    num1 = createRef(); // createRef() creates a reference to the input element
    num2 = createRef();
    operator = createRef();
    result = createRef();

    calculate = (ev) => {
        let op = ev.target.innerText; // get the operator
        let n1 = parseInt(this.num1.current.innerText);
        let n2 = parseInt(this.num2.current.innerText);
        let r = eval(`${n1} ${op} ${n2}`);
        this.result.current.innerText = r;
        this.operator.current.innerText = op;
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px", fontSize: "20px", borderBottom: '2px solid black', paddingBottom: '20px' }}>
                <h1 style={{ textAlign: "center", marginTop: "20px", borderBottom: '2px solid black', paddingBottom: '20px' }} >App4-1</h1>
                <h2>Refs Class</h2>
                <div>
                    <span ref={this.num1}>15</span>&nbsp;
                    <span ref={this.operator}>?</span>&nbsp;
                    <span ref={this.num2}>5</span>&nbsp;
                    <span>=</span>&nbsp;
                    <span ref={this.result}>?</span>
                    <div>
                        <button onClick={this.calculate}>+</button>&nbsp;
                        <button onClick={this.calculate}>-</button>&nbsp;
                        <button onClick={this.calculate}>*</button>&nbsp;
                        <button onClick={this.calculate}>/</button>&nbsp;
                    </div>
                </div>
            </div>
        );
    }
}