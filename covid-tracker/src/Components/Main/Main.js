import React, { useState, useEffect } from 'react'

import Overview from './Overview'
import SelectForm from './SelectForm'
import StateInfo from './StateInfo'


const Main = ({ summaryData, handleSubmitFromApp, inputApp }) => {

    return(
        <>
            <div className='mainDiv'>
                {summaryData[0] ? <Overview id="overview" summaryData = {summaryData}/> : null}
                <div id="searchByState">
                    <SelectForm handleSubmitFromApp={handleSubmitFromApp}/>
                </div>
                <StateInfo inputApp={inputApp}/>
            </div>
        </>
    )
}

// document.getElementById('searchByState').scrollIntoView({
//     behavior: 'smooth'
//   });

export default Main