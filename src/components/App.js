import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Kid = styled.div`
    display: flex;
`

const App = () => {
    const millis = Date.now()
    const day = Math.floor(millis/1000/60/60/24)
    console.log('date', day)
    return (
        <Container>
            <h1>Who Gets The Dog?</h1>

            MY APP
        </Container>
    )
} 

export default App