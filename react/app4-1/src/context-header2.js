import React from 'react';
import { userContext } from './context';

export default class Header2 extends React.Component {
    static contextType = userContext;

    render() {
        // const user = this.context;
        let [user, setUser] = this.context;

        const headerStyle = {
            backgroundColor: '#ccc',
            textAlgn: 'center',
            padding: '5px',
        };

        const onClickSignout = (event) => {
            event.preventDefault();
            setUser('');
        };

        const onClickSignin = (event) => {
            event.preventDefault();
            setUser('Tom Jerry');
        }

        return (
            <div style={headerStyle}>
                <a href="/">Home</a>&nbsp;-&nbsp;
                <a href="/">Product</a>&nbsp;-&nbsp;
                <a href="/">Contact Us</a>&nbsp;-&nbsp;
                {(user) ?
                    (<span>[{user}&nbsp;:&nbsp;
                        <a href="/" onClick={onClickSignout}>Logout</a>]
                    </span>)                        
                    :
                    (<span>
                        <a href="/" onClick={onClickSignin}>Login</a>
                    </span>)                    
                }
            </div>
        )
    }
}