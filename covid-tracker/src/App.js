import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import styled, { css } from 'styled-components'

import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ByCountry from './Components/Main/ByCountry'


function App() {

  const [summaryData, setSummaryData] = useState([])
  const [stateData, setStateData] = useState([])
  const [inputApp, setInputApp] = useState('')
  const [CountryInputApp, setCountryInputApp] = useState('')

  useEffect(()=>{
    const urlSummary = 'https://covidtracking.com/api/us'
    const makeApiCallSummary =  async () =>{
      const resSummary = await fetch(urlSummary)
      const jsonSummary = await resSummary.json()
      setSummaryData(jsonSummary)
    }
    makeApiCallSummary()
  },[])
  
  const handleSubmitFromApp = (input) => {
    setInputApp(input)
    console.log('handling submit from App - inputApp', input)
  }

  const handleCountrySubmitFromApp = (input) => {
    setCountryInputApp(input)
    console.log('Country - handling submit from App - inputApp', input)
  }

  // console.log(inputApp)
  // console.log('summaryData', summaryData)

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

  return (
    <>
      <div className='Document'>
        <div className="App">
          <Nav />
        </div>
        <main>
          <Switch>
            <Route exact path='/' render = {props => <Main {...props} 
                                                              summaryData={summaryData}  
                                                              handleSubmitFromApp={handleSubmitFromApp}
                                                              inputApp={inputApp}
                                                              handleCountrySubmitFromApp={handleCountrySubmitFromApp}
                                                              />} />
            <Route path='/about' render ={props => <About {...props} />} />
            <Route path='/by-country' render = {props => <ByCountry {...props}
                                                                    handleCountrySubmitFromApp={handleCountrySubmitFromApp}
                                                                    CountryInputApp={CountryInputApp}
                                                                    ByCountryData={ByCountryData}
                                                                    />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
