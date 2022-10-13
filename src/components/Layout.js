import React from 'react'
import Navbar from './Navbar'

const Layout = ({ user, children, setUser }) => {
    console.log(children)

    return (
        <div>
            <Navbar user={user} setUser={setUser} />
            {children}
        </div>
    )
}

export default Layout