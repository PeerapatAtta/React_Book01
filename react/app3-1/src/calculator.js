import React from "react";

export class Calculator extends React.Component {
    n1 = 15;
    n2 = 5;

    calculate = (op) => {
        let c = `${this.n1} ${op} ${this.n2}`;
        let r = eval(c);
        alert(`${c} = ${r}`);
    }

    render() {
        return (
            <div style={{ margin: '20px', textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '50px' }}>
                <h1>Calculator</h1>
                <span>{this.n1}</span>&nbsp;
                <button onClick={() => this.calculate('+')}>+</button>&nbsp;
                <button onClick={() => this.calculate('-')}>-</button>&nbsp;
                <button onClick={() => this.calculate('*')}>*</button>&nbsp;
                <button onClick={() => this.calculate('/')}>/</button>&nbsp;
                <span>{this.n2}</span>
            </div>      
        );
    }
}