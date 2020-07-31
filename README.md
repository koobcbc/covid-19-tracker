# Project Overview

## Project Links

- [Deployment link](https://covid-tracker-koo.netlify.app/)

## Project Description

This is a website that displays simple statistics on COVID-19 in the US by states and global statistics by countries.
I used React.js for the framework of the app.

## Preview
![preview of Home Page](https://i.imgur.com/JZiAVot.png | width=200)

## API

- https://api.covid19api.com/summary
- http://covidtracking.com/api/us
- https://covidtracking.com/api/states

Snippet of API:
```
{data: {
"date": 20200625,
"state": "AK",
"positive": 816,
"negative": 98636,
"pending": null,
"hospitalizedCurrently": 14,
"hospitalizedCumulative": null,
"inIcuCurrently": null,
"inIcuCumulative": null,
"onVentilatorCurrently": 2,
"onVentilatorCumulative": null,
"recovered": 513,
"dataQualityGrade": "A",
"lastUpdateEt": "6/25/2020 00:00",
"dateModified": "2020-06-25T00:00:00Z",
...
},}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframes](https://www.figma.com/file/mxErMgMKl56Hn3laXCMwty/COVID-19-design?node-id=0%3A1)
- [React Architecture](https://www.figma.com/file/xaMLzFv4FNGUxbAU4Az9cV/React-Architecture?node-id=0%3A1)


### MVP/PostMVP

#### MVP
- Find and use external api.
- Render data on page and display US statistics and global statistics. 
- Allow user to navigate through links.
- Allow users to make an input to view COVID-19 data in the selected state/country.
- Display additional information on COVID-19 in about page.

#### PostMVP

- Additional Styling including animations.

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router, Nav, Main, and Footer components| 
| Nav | This will render the header include the nav | 
| Main | This will be the main section or a Home page and include Overview, SearchForm, and StateInfo components| 
| About | This will render the about section | 
| Footer | This will render the footer that will appear in all pages | 
| Overview | This will render the overview statistics of COVID-19 in the US | 
| SearchForm | This will render the search form to search stats for a particular state | 
| StateInfo | This will render the statistics of COVID-19 in inputted state | 


## Time Frame

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create components and export/import among files| H | 1hr| 1hr | 1hr |
| Set up React Routing | H | 20min| 20min | 20min |
| NavBar and Footer | H | 1.5hr| 1.5hrs | 1.5hrs |
| Research COVID-19 and write About component | H | 1.5hrs| 0.5hr | 0.5hr |
| main - make API call and pass down data | H | 2hrs| 3.5hrs | 3.5hrs |
| make searchForm | H | 2.5hrs| 2.5hrs | 2.5hrs |
| make state&function to pass up user input | H | 1.5hrs| 3hrs | 3hrs |
| create stateInfo component | H | 2hrs| 4hrs | 4hrs |
| Working with API | H | 4hrs| 5hrs | 5hrs |
| Basic Styling for nav, footer, about page | H | 2hrs| 2hrs | 2hrs |
| Basic Styling for main | H | 2hrs| 2.5hrs | 2.5hrs |
| Additional Styling for the page | M | 4hrs| 3hrs | 3hrs |
| Total | H | 24hrs| 28.5hrs| 28.5hrs|

## Additional Libraries
- Axios - 

## Code Snippet
This code snippet was written to display negative and positive values in distinguished styles.

```
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
```
