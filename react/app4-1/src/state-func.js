import React, { useState } from 'react';

export default function MessageBox() {
    let [text, setText] = useState('Hello World!');
    let [size, setSize] = React.useState(16);

    const onClickSetText = () => {
        let t = prompt('Enter text');
        if (t) { setText(t) };
    }

    const onClickZoomIn = () => {
        let newSize = size + 1;
        setSize(newSize);
    }

    let msgboxStyle = {
        display: 'inline-block',
        width: '350px',
        fontSize: size,
        backgroundColor: '#ccc',
        padding: '5px',
        textAlign: 'left'
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', borderBottom: '2px solid black', paddingBottom: '20px' }}>
            <h2>State Function</h2>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick={onClickSetText}>Set Text</button>&nbsp;
            <button onClick={onClickZoomIn}>Zoom In</button>&nbsp;
            <button onClick={() => setSize(size-1)}>Reduce Size</button>
        </div>
    );
}