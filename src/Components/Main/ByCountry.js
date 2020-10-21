import React, { useEffect, useState } from 'react';
import ByCountryForm from './ByCountryForm';
import Global from './Global'
import CountryInfo from './CountryInfo'


const ByCountry =({ CountryInputApp, handleCountrySubmitFromApp, ByCountryData }) => {


    return(
        <>
          <Global ByCountryData={ByCountryData}/>
          <ByCountryForm handleCountrySubmitFromApp={handleCountrySubmitFromApp} CountryInputApp={CountryInputApp}/>
          <div class='ByCountryDiv'>
            <CountryInfo ByCountryData={ByCountryData} CountryInputApp={CountryInputApp}/>
          </div>
        </>
    )
}

export default ByCountry