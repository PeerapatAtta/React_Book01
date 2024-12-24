import React from 'react';
import { userContext } from './context';

export default function Content2(){
    let [user,setUser] = React.useContext(userContext);

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: '10px',
        marginTop: '10px',
        borderBottom: '1px solid #333'        
    };

    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('Tom Jerry');
    }

    return (
        <div style={contentStyle}>
            <h2>Content</h2>
            {
                (user) ? <span>Welcome {user}</span> : <span>Please <a href="/" onClick={onClickSignin}>Signin</a></span>
            }          
        </div>
    );
}