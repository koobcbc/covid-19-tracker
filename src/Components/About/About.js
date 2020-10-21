import React from 'react'


const About = () => {
    return(
        <>
            <div className='AboutContainer'>
                <h2>What is COVID-19?</h2>
                <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.</p>
                <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                <br/>
                <h2>How does it spread?</h2>
                <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>
                <br/>
                <h2>Symptoms</h2>
                    <h4>Most common symptoms:</h4>
                    <ul className='mostCommonSymptomList'>
                        <li>fever</li>
                        <li>dry cough</li>
                        <li>tiredness</li>
                    </ul>
                    <br />
                    <h4>Less common symptoms:</h4>
                    <ul className='leastCommonSymptomList'>
                        <li>aches and pains</li>
                        <li>sore throat</li>
                        <li>diarrhoea</li>
                        <li>conjunctivitis</li>
                        <li>headache</li>
                        <li>loss of taste or smell</li>
                    </ul>
                <br/>
                <h2>To Prevent:</h2>
                <ul>
                    <li>Wash your hands frequently</li>
                    <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                    <li>Wear a mask when physical distancing is not possible.</li>
                    <li>Don’t touch your eyes, nose or mouth.</li>
                    <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                    <li>Stay home if you feel unwell.</li>
                    <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
                </ul>
                <a href='//www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub'><p>Source: World Health Organization (WHO)</p></a>
            </div>
        </>
    )
}

export default About