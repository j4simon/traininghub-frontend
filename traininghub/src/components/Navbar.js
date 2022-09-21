import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div`
    background-color: purple;
    padding: 20px;
    display: flex;

    h2 {
        color: #02840f;
        font-weight: bold;
        text-shadow: 2px 2px black;
        font-size: 50px;
    }

    ul {
        display: flex;
        justify-content: space-evenly; 
    }


    li {
        list-style: none;
        padding-right: 10px;
        font-size: 20px;
        font-family: "Helvetica Neue",Helvetica
    }

    a:link {
        padding: 3px;
        text-decoration: none;
        outline: 1px solid;
        background: lightgray;
        color: #aa104f;
    }

    a:visited {
        text-decoration: none;
        color: #aa104f;

    }

    a:hover {
        text-decoration: none;
        color: #aa104f;
    }

    a:active {
        text-decoration: none;
        color: #aa104f;
    }

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