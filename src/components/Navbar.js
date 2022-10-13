import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
    background-color: purple;
    padding: 20px;

    h2 {
        margin-left: 34%;
        color: #02840f;
        font-weight: bold;
        text-shadow: 2px 2px black;
        font-size: 50px;
    }

    ul {
        font-size: 33%;
        display: flexbox;
        justify-content: space-evenly; 
        text-align: center;
        margin-left: 33%;

    }


    li {
        list-style: none;
        padding-right: 10px;
        font-size: 20px;
        align-content: center;

    }

    a {
        display: inline-block;
        padding: 3px;
        text-decoration: none;
        outline: 1px solid;
        background: lightgray;
        color: #aa104f;
        border-radius: 5px;
        align-content: bottom;
    }

    /* a:visited {
        text-decoration: none;
        color: #aa104f;

    }

    a:hover {
        text-decoration: none;
        color: #aa104f;
        border-radius: 5px;

    }

    a:active {
        text-decoration: none;
        color: #aa104f;
        border-radius: 5px;

    } */

`

const Navbar = () => {
    // const navigate = useNavigate()

    return (
        <NavbarContainer>
            <h2>Training Hub</h2>
            <ul>
                <li><Link to='/training/'>View Trainings</Link></li>
                <li><Link to='/training/new'>New Training</Link></li>
                {/* <li><Link to='/modules/'>View Training</Link></li> */}
                {/* {user ? <li>Welcome {user.name}</li> : <li><Link to='/login'>Login</Link><Link to='/register'>Register</Link></li>}
                {user ? <button onClick={() => {
                    setUser(null)
                    navigate('/login')
                }}> Log Out</button> : null} */}
            </ul>
        </NavbarContainer>
    )
}

export default Navbar