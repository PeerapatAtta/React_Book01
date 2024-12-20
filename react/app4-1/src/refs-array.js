import React from 'react';


export default function RefsArray() {
    const table = React.useRef()
    const tr = React.useRef([])
    const data = [
        ["JavasScript", 100],
        ["React", 200],
        ["Vue", 300],
        ["Angular", 400]
    ]

    const onClickButton = (i) => {
        const index = tr.current[i].rowIndex
        table.current.deleteRow(index)
    }

    const onMouseOverRow = (i) => {
        tr.current[i].style.backgroundColor = 'yellow'
    }

    const onMouseOutRow = (i) => {
        tr.current[i].style.backgroundColor = 'white'
    }

    const tableStyles = { margin: 'auto', margintop: '30px' }

    return (
        <div style={{ textAlign: "center", marginTop: "20px", borderBottom: '2px solid black', paddingBottom: '20px' }}>
            <h2>Refs Array</h2>
            <table ref={table} border="1" cellPadding={5} style={tableStyles}>
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i} ref={el => tr.current[i] = el} onMouseOver={() => onMouseOverRow(i)} onMouseOut={() => onMouseOutRow(i)}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td><button onClick={() => onClickButton(i)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}