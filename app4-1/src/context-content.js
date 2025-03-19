import React from 'react';
import { userContext } from './context';

export default function Content(){
    let user = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: '10px',
        marginTop: '10px',
        borderBottom: '1px solid #333'        
    };

    return (
        <div style={contentStyle}>
            <h2>Content</h2>
            <p>Hello {user}</p>           
        </div>
    );
}