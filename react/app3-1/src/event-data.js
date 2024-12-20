import React from "react";

export class EventObject1 extends React.Component {
    onClickStartStop = (ev) => {
        let t = ev.target.innerText; // to get the text of the button
        let s = (t === 'Start') ? 'Stop' : 'Start'; // to toggle the text
        ev.target.innerText = s; // to set the text of the button
    }

    onClickAdd = (ev) => {
        let t = ev.target.innerText; // to get the text of the button
        let r = eval(t); // to evaluate the text
        alert(`${t} = ${r}`); // to show the result
    }

    render() {
        return (
            <div style={{ margin: '20px', textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '20px' }}>
                <h1>Event Object 1</h1>

                <button onClick={(ev)=>this.onClickStartStop(ev)}>Start</button><br/><br/>

                <button onClick={(ev)=>this.onClickAdd(ev)}>10 + 20</button><br/><br/>

                <button onClick={this.onClickAdd.bind(this)}>30 + 40</button><br/><br/>
            </div>
        );
    }
}