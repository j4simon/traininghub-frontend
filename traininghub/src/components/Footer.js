import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color : purple;
    width : 100%;
    padding: 1px;
    color: white;
    ul{
        display: flex;
        justify-content: space-evenly;
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    position: fixed;
    bottom: 0;
`

const Footer = () => {
    return (
        <FooterContainer>
            <footer>&copy; 2022</footer>

        </FooterContainer>
    )
}

export default Footer