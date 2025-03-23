import React from 'react'

export default function FormSearch() {
    return (
        <>
        <h1 className="border p-3 m-3 w-50 mx-auto text-center">App7.1 - Form</h1>
        <div className="border p-3 mb-3 w-50 mx-auto text-center">
            <h3>React Form</h3>
            <form>
                <input type="text" name="q" placeholder="Search"/>
                <button>OK</button>
            </form>
        </div>
        </>
    )
}

