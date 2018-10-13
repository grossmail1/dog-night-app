import React from 'react'
import styled from 'styled-components'


const boys = {
    paxton: {
        name: 'Paxton',
        color: '#F46F00'
    },
    landon: {
        name: 'Landon',
        color: '#0BCF46' 
    },
    pierce: {
        name: 'Pierce',
        color: '#E20E0E'
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 0;
    background-color: ${props => props.color};
    color: #fff
`
const H1 = styled.h1`
    text-align: center;
    margin: 0 0 20px; 
`

const H2 = styled.h2`
    text-align: center;
    font-size: 4em;
    margin: 0 0 10px; 
`

const Kid = styled.div`
    display: flex;
`

const App = () => {
    const millis = Date.now()
    let day = Math.floor(millis/1000/60/60/24)
    const day1 = day + 1
    const day2 = day + 2
    day = day1

    let boy
    if (day % 3 === 0) {
        //paxton
        boy = boys.paxton
    } else if (day % 2 === 0) {
        //landon
        boy = boys.landon
    } else {
        //pierce
        boy = boys.pierce
    }
    return (
        <Container color={boy.color}>
            <H1>Who Gets The Dog?</H1>

            <H2>{boy.name}!!!</H2>
        </Container>
    )
} 

export default App