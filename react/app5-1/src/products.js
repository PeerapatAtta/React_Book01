import React from 'react';
import './products.css';

export default class Products extends React.Component {
    data = [
        ['React', 500], ['Angular', 300], ['Vue', 200], ['Ember', 100], ['Backbone', 50]
    ]

    render() {
        return (
            <>
                <h1>App5-1</h1>
                <h2>Products</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>

        );
    }
}