import styled from 'styled-components/macro'
import Form from './components/Form'


function MainPage({setUserPlace, errorMessage}) {   

    return (
        <MainPageStyled>
            <h1>Bin ich in einem Covid-19 Hotspot?</h1>
            <Form 
                setUserPlace={setUserPlace}
                errorMessage={errorMessage}
                >
            </Form>
        </MainPageStyled> 
    )
}

const MainPageStyled = styled.div`
padding: 10px;
display: grid;
grid-gap: 20px;
background: #F5F5F7;

h1 {
    margin: 100px 0;
}
`


export default MainPage