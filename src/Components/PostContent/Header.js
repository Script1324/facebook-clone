import React from 'react'
import "../../Styles/PostHeader.css"

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { UseProvider } from '../StateProvider/StateProvider';
import { Avatar } from '@mui/material';

function Header({data_Id}) {

  const {deleteData,user} = UseProvider();

  return (
    <div className='postheader-container'>
        <div className='postheader-icon'>
            <i><Avatar src={user.user.photoURL}/></i>
            <div className='postname'>
                <p>{user.user.displayName}</p>
                <p>9:00 am</p>
            </div>
        </div>
        
        <div className='post-remove'>
                <CloseOutlinedIcon onClick={()=> deleteData(data_Id)}/>
        </div>
    </div>
  )
}

export default Header