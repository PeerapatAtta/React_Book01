import React from "react";

export default function Table(){
    const data = [
        ['JavaScript',100],
        ['React',200],
        ['Angular',300],
        ['Vue',400],
    ]

    const onMouseOverRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'yellow';
    }

    const onMouseOutRow = (ev) => {
        ev.target.parentNode.style.backgroundColor = 'white';
    }

    return (
        <>
            <h1 style={{ margin: '20px', textAlign: 'center'}}>Table</h1>
            <table border="1" cellPadding={5} style={{margin: 'auto', marginTop: '30px'}}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )

}