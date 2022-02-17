import { Avatar } from '@mui/material'

import React from 'react'
import { UseProvider } from '../StateProvider/StateProvider'
import "../../Styles/ReadComment.css"

function ReadComment({content}) {
    const{user} = UseProvider()

    const style = [
        {
        display:"flex",
        padding:"10px"
      },
      {
        width:"auto",
        backgroundColor:"rgb(232, 231, 231)",
        maxWidth:"90%",
        height:"auto",
        padding:"10px",
        marginLeft:"5px",
        borderRadius:"20px"
      }
  ]


  return (
    <div className='readcomments-container' style={style[0]}> 
                <Avatar src={user.user.photoURL}/>  <div className='comments-holder active'><p>{content}</p>
</div>     
                
    </div>
  )
}

export default ReadComment