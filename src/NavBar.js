import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            
                <Nav>
                    <Link>
                    <Link to='/test'>Test</Link>
                    </Link>
                </Nav>
            
        </div>
    )
}
export default NavBar