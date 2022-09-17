import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const NavbarContainer = styled.nav`
    background-color: purple;
    padding: 5px;

    ul {
        display: flex;
        justify-content: space-evenly;
    }

    li {
        list-style: none;
    }
`

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate()

    return (
        <NavbarContainer>
            <ul>
                <li><Link to='/training/'>Home</Link></li>
                <li><Link to='/training-list/'>View Training</Link></li>
                <li><Link to='/modules/'></Link></li>
                {user ? <li>Welcome {user.name}</li> : <li><Link to='/login'>Login</Link><Link to='/register'>Register</Link></li>}
                {user ? <button onClick={() => {
                    setUser(null)
                    navigate('/login')
                }}> Log Out</button> : null}
            </ul>
        </NavbarContainer>
    )
}

export default Navbar