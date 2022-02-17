import React from 'react'
import "../Styles/SideNav.css"
import NavList from './NavList'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

  import {UseProvider} from "../Components/StateProvider/StateProvider"
  import {Avatar} from "@mui/material"

function SideNav() {

  const {user,darkmode} = UseProvider()

        //This is the SideNav
        const navlistContent = [
            {
                icon: <Avatar src={user.user.photoURL}/>,
                text: user.user.displayName,
           },
           {
            icon:<GroupsOutlinedIcon style={{color:"#4267B2"}}/>,
            text: "Friends",
          },
          {
            icon:<StorefrontOutlinedIcon style={{color:"#4267B2"}}/>,
            text: "Groups",
          },
          {
            icon:<AirplayOutlinedIcon style={{color:"#4267B2"}}/>,
            text: "Watch",
          },
          {
            icon:<QueryBuilderOutlinedIcon style={{color:"#4267B2"}}/>,
            text: "Marketplace",
          },
          {
            icon:<KeyboardArrowDownOutlinedIcon style={{color:"#4267B2"}}/>,
            text: "see more",
          },

    ]


  return (
    <div className={darkmode? 'side-nav-container active' : 'side-nav-container'}>
            {navlistContent.map((list,index)=>{
                return <div key={index}><NavList key={index} icon={list.icon} text={list.text}/> </div>
            })}
    </div>
  )
}

export default SideNav