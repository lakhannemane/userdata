import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const Header = () => {
    return (
        <>
            <ul className='nav'>

                <li className='prod'>
                    <Link to="/"> Home Page</Link>
                </li>
                <br />
                <li className='prod1'>
                    <Link to="/view"> View Page</Link>
                </li>
            </ul>
        </>
    )
}

export default Header