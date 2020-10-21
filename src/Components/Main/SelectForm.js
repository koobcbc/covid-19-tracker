import React, { useState, useEffect } from 'react'

const SelectForm = ( {stateAbbreviation, handleSubmitFromApp} ) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        console.log('handling change in input state', e.target.value)
        const userInput = e.target.value
        setInput(userInput)
    }
    const handleSubmit = (e) => {
        console.log('handling Submit' - input) 
        e.preventDefault()
        handleSubmitFromApp(input)
        setInput('')
    }

    console.log('selectform - input', input)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className='block'>Search By State</h3>
                <input
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={input}
                 />
                 <button>SUBMIT</button>
            </form>
        </div>
    )
}


export default SelectForm