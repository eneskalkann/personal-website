import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {

    const links = [
        {
            id:1,
            items: "Home"
        },
        {
            id:2,
            items: "About"
        },
        {
            id:3,
            items: "Skills"
        },
        {
            id:4,
            items: "Projects"
        },
        {
            id:5,
            items: "Contact"
        }
    ]

  return (
    <div className='menu'>
        <div className='nav'>
            <ul className='items'>
                {links.map(({id, items})=> (
                    <li key={id}>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Nav