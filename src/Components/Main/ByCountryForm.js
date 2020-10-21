import React, { useState, useEffect } from 'react'

const ByCountryForm = ( { handleCountrySubmitFromApp, CountryInputApp } ) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        console.log('handling change in ByCountry input state', e.target.value)
        const userInput = e.target.value
        setInput(userInput)
    }

    const handleSubmit = (e) => {
        console.log('handling Submit' - input) 
        e.preventDefault()
        handleCountrySubmitFromApp(input)
        setInput('')
    }

    console.log('ByCountryForm - input', CountryInputApp)

    // const [SingleCountryData, setSingleCountryData] = useState({})
    // const[ByCountryData, setByCountryData] = useState({})

    // useEffect(()=>{
    //     const urlByCountry = 'https://api.covid19api.com/summary'
    //     const makeApiCallCountry =  async () =>{
    //       const resByCountry = await fetch(urlByCountry)
    //       const jsonByCountry = await resByCountry.json()
    //       setByCountryData(jsonByCountry)
    //     }
    //     makeApiCallCountry()
    //   },[])

    // console.log('ByCountryForm - ByCountryData', ByCountryData)

    // const [exist, setExist] = useState(true)

    // useEffect(()=>{
    //     if (CountryInputApp !== ''){
    //         let filteredCountry = ByCountryData.Countries.filter(d=>(d.Country == CountryInputApp))
    //         console.log(filteredCountry)
    //         if (filteredCountry.Country) {
    //             setExist(false)
    //         }
    //         else{
    //             setExist(true)
    //         }
    //     }
    // },[CountryInputApp])

    // const closeButton = (e) => {
    //     e.target.alert('close')
    // }

    // console.log('exist',exist)

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className='block'>Search By Country</h3>
                <input
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={input}
                 />
                 <button>SUBMIT</button>
            </form>
            {/* {exist==false ? <div class="alert alert-warning alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>closeButton}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Warning!</strong> Check for the Spelling and Try Again.
                            </div> : null} */}
        </div>
    )
}


export default ByCountryForm