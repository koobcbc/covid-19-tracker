import React, { useState, useEffect } from 'react'
import stateAbbreviation from '../../stateAbbreviation'


const CountryInfo = ({CountryInputApp}) => {

    const [SingleCountryData, setSingleCountryData] = useState({})
    const[ByCountryData, setByCountryData] = useState({})

    useEffect(()=>{
        const urlByCountry = 'https://api.covid19api.com/summary'
        const makeApiCallCountry =  async () =>{
          const resByCountry = await fetch(urlByCountry)
          const jsonByCountry = await resByCountry.json()
          setByCountryData(jsonByCountry)
        }
        makeApiCallCountry()
      },[])

    console.log('countryInfo - ByCountryData', ByCountryData)

    useEffect(()=>{
        if (CountryInputApp !== ''){
            let filteredCountry = ByCountryData.Countries.filter(d=>(d.Country.toLowerCase().includes(CountryInputApp.toLowerCase())))
            setSingleCountryData(filteredCountry[0])
        }
    },[CountryInputApp])
    console.log(SingleCountryData)

    
    return(
        <>
            {SingleCountryData ?
            <div className='CountryInfoContainer'>
                {SingleCountryData.Country ? <h2 className='center'>{SingleCountryData.Country}</h2> : null}
                {SingleCountryData.Country ? <p className='dateUpdated center'>Date Updated: {SingleCountryData.Date}</p>: null}
                <div className='CountryInfoData-center'>
                    <div className='CountryInfoData'>
                        {SingleCountryData.Country ? <h4>Confirmed: {SingleCountryData.TotalConfirmed}
                                        <span className={SingleCountryData.NewConfirmed > 0 ? 'positive' : 'negative'}> {SingleCountryData.NewConfirmed > 0 ? '+' : ''}{SingleCountryData.NewConfirmed}</span>
                                    </h4> : null}
                        {SingleCountryData.Country ? <h4>Death: {SingleCountryData.TotalDeaths}
                                        <span className={SingleCountryData.NewDeaths > 0 ? 'positive' : 'negative'}> {SingleCountryData.NewDeaths > 0 ? '+' : ''}{SingleCountryData.NewDeaths}</span></h4> : null}
                        {SingleCountryData.Country ? <h4>Total Recovered: {SingleCountryData.TotalRecovered}
                                        <span className={SingleCountryData.NewRecovered > 0 ? 'positive' : 'negative'}> {SingleCountryData.NewRecovered > 0 ? '+' : ''}{SingleCountryData.NewRecovered}</span>
                                    </h4> : null}
                    </div>
                </div>
            </div> : <div className='placeHolder'></div>}
        </>
    )
}

export default CountryInfo