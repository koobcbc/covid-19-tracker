import React from 'react'

const Global = ({ ByCountryData }) => {

    // console.log(summaryData)
    const ByCountryGlobalData = ByCountryData.Global
    console.log(ByCountryGlobalData)

    return(
        <>
            <div className='global-overview-container'>
                <h2>Global COVID-19 Statistics</h2>
                {ByCountryGlobalData  ?
                <div className='globalOverview'>
                    <h4>Confirmed: {ByCountryGlobalData.TotalConfirmed}
                                    <span className={ByCountryGlobalData.NewConfirmed > 0 ? 'positive' : 'negative'}> {ByCountryGlobalData.NewConfirmed > 0 ? '+' : ''}{ByCountryGlobalData.NewConfirmed}</span>
                    </h4>
                    <h4>Death: {ByCountryGlobalData.TotalDeaths}
                                    <span className={ByCountryGlobalData.NewDeaths > 0 ? 'positive' : 'negative'}> {ByCountryGlobalData.NewDeaths > 0 ? '+' : ''}{ByCountryGlobalData.NewDeaths}</span>
                    </h4>
                    <h4>Recovered: {ByCountryGlobalData.TotalRecovered}
                                    <span className={ByCountryGlobalData.NewRecovered > 0 ? 'positive' : 'negative'}> {ByCountryGlobalData.NewRecovered > 0 ? '+' : ''}{ByCountryGlobalData.NewRecovered}</span>
                    </h4>
                </div>
                : null}
            </div>
        </>
    )
}

export default Global