import React from 'react'

export default function SmurfForm() {

    const handleChanges = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="smurfName"
                value={}
                placeholder="Name of Smurf"
                type="text"
                onChange={handleChanges}
            />
            <br/>
            <br/>
            <input
                name="smurfAge"
                value={}
                placeholder="Age of Smurf"
                type="text"
                onChange={handleChanges}
            />
            <br/>
            <br/>
            <input 
                name="smurfHeight"
                value={}
                placeholder="Height of Smurf"
                type="text"
                onChange={handleChanges}
            />
            <br/>
            <button type="submit">Add New Smurf</button>
        </form>
    )
}
