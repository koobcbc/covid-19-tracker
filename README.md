# Project Overview

## Project Links

- [Github repo link](https://github.com/koobcbc/covid-19-tracker)
- [Deployment link]()

## Project Description

This is a website that displays statistics on COVID-19 mainly in the US and its fifty states.

## API

https://api.covid19api.com/summary
https://covidtracking.com/api/states

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
- [add link to your react architecture](https://www.figma.com/file/xaMLzFv4FNGUxbAU4Az9cV/React-Architecture?node-id=0%3A1)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Nav | This will render the header include the nav | 
| Main | This will render the header include the nav | 
| About | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Overview | This will render the header include the nav | 
| SearchForm | This will render the header include the nav | 
| Main | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```