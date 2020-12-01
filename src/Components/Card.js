import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    color: #fff;
    font-weight: 300;
`

const Date = styled.div`
    color: #ccc;
    font-weight: 300;
    margin: 6px 0;
`

const Description = styled.p`
    color: #fff;
    font-weight: 300;
`

const Card = (props) => (
    <div style= {{color:"fff"}}>
        <h2>Weather Dashboard</h2>
        <div>
        Uses the OpenWeather API allowing the user to type in any city in the world and view the weather of today and the the five following days. Utilizes local storage to save cities the user searched for so they can pull the forecast back up with the click of a button. Coded with vanilla javascript.
        </div>
    </div>
)

export default Card