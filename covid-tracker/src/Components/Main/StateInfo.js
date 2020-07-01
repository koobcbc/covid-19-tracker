import React, { useState, useEffect } from 'react'
import stateAbbreviation from '../../stateAbbreviation'


const StateInfo = ({inputApp}) => {

    const [stateData, setStateData] = useState([])


    let filteredState = stateAbbreviation.filter(d=>(d.name == inputApp || d.abbreviation == inputApp))
    console.log('filteredState', filteredState)
    let index = stateAbbreviation.indexOf(filteredState[0])

    console.log('stateinfo - inputApp', inputApp)
    console.log('stateinfo-index', index)

    useEffect(() => {
        const urlState = 'https://covidtracking.com/api/states'
        const makeApiCallState = async () => {
            const resState = await fetch(urlState)
            const jsonState = await resState.json()
            console.log('ApiCAll-jsonState', jsonState)
            setStateData(jsonState[index])
            // index = 0
        }
        makeApiCallState()
    }, [index])

        console.log('StateInfo - stateData', stateData)

    
    return(
        <>
            <div className='stateInfoContainer'>
                {stateData ? <h2 className='center'>{stateData.state}</h2> : null}
                <div className='stateInfoData'>
                    {stateData ? <h4>Positive: {stateData.positive}
                                    <span className={stateData.positiveIncrease > 0 ? 'positive' : 'negative'}> {stateData.positiveIncrease > 0 ? '+' : ''}{stateData.positiveIncrease}</span>
                                </h4> : null}
                    {stateData ? <h4>Negative: {stateData.negative}
                                    <span className={stateData.negativeIncrease > 0 ? 'positive' : 'negative'}> {stateData.negativeIncrease > 0 ? '+' : ''}{stateData.negativeIncrease}</span></h4> : null}
                    {stateData ? <h4>Death: {stateData.death}
                                    <span className={stateData.deathIncrease > 0 ? 'positive' : 'negative'}> {stateData.deathIncrease > 0 ? '+' : ''}{stateData.deathIncrease}</span>
                                </h4> : null}
                    {stateData ? <h4>Hospitalized: {stateData.hospitalized}
                                    <span className={stateData.hospitalizedIncrease > 0 ? 'positive' : 'negative'}> {stateData.hospitalizedIncrease > 0 ? '+' : ''}{stateData.hospitalizedIncrease}</span>
                                </h4> : null}
                    {stateData ? <h4>Total Test Results: {stateData.totalTestResults}
                                    <span className={stateData.totalTestResultsIncrease > 0 ? 'positive' : 'negative'}> {stateData.totalTestResultsIncrease > 0 ? '+' : ''}{stateData.totalTestResultsIncrease}</span>
                                </h4> : null}
                </div>
            </div>
        </>
    )
}

export default StateInfo