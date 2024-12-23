import React from 'react';

export default class Cart extends React.Component {
    state = { numItems: 0 };

    onClickAddCart = () => {
        let n = this.state.numItems;
        n++
        this.setState({ numItems: n });
    }

    onClickDeleteCart = () => {
        if (this.state.numItems > 0) {
            this.setState({ numItems: this.state.numItems - 1 });
        }
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px", borderBottom: '2px solid black', paddingBottom: '20px' }}>
                <h2>State Class</h2>
                <div>Cart: {this.state.numItems}</div><br/>
                <button onClick={this.onClickAddCart}>Add to Cart</button>
                <button onClick={this.onClickDeleteCart}>Delete from Cart</button>
            </div>
        )
    }
}