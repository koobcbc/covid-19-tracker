import React from 'react'

const Overview = ({ summaryData }) => {

    // console.log(summaryData)
    const summary = summaryData[0]
    // console.log(summary)

    return(
        <>
            <div className='overview-container'>
                <h2>Overview of US stats</h2>
                <p className='dateUpdated'>Date Updated: {summary.dateChecked}</p>
                <div className='overview'>
                    <h4>Confirmed: {summary.positive} <span className={summary.positiveIncrease>0 ? 'positive' : 'negative'}> {summary.positiveIncrease>0 ? '+' : ''}{summary.positiveIncrease}</span></h4>
                    <h4>Death: {summary.death} <span className={summary.deathIncrease>0 ? 'positive' : 'negative'}> {summary.deathIncrease>0 ? '+' : ''}{summary.deathIncrease} </span></h4>
                    <h4>Recovered: {summary.recovered}</h4>
                    <h4>Currently Hospitalized: {summary.hospitalizedCurrently} <span className={summary.hospitalizedIncrease>0 ? 'positive' : 'negative'}> {summary.hospitalizedIncrease>0 ? '+' : ''}{summary.hospitalizedIncrease} </span></h4>
                </div>
            </div>
        </>
    )
}

export default Overview