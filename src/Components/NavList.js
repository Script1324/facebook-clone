import React from 'react'
import "../Styles/NavList.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavList({icon,text}) {
  return (
    <div className='navlist-container'>
                    <div className='list-icon'>
                            {icon}
                    </div>
                    <div className='list-text'>
                           {text}
                  </div>
    </div>
  )
}

export default NavList