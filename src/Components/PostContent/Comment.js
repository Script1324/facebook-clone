import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import "../../Styles/Comment.css"
import { UseProvider } from '../StateProvider/StateProvider'
import ReadComment from './ReadComment'

function Comment({id,comments}) {
    const{user,addComment} = UseProvider()

    const [comment,setComment] =  useState("")

    const CommentPost = (e) =>{
            e.preventDefault()

            addComment(id,comment)
          setComment('')
    }

  return (
    <div className='comment-container'>
            <div className='comment-input'>
            <Avatar src={user.user.photoURL}/> 
                <form onSubmit={CommentPost}>
           
                     <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)} placeholder='Write a public comment...'/>
                
                </form>
            </div>

          {
            comments !== undefined ? comments.map((com,indx)=>{
                return  <ReadComment key={indx} content={com}/>
            }) : null
          }
           

    </div>
  )
}

export default Comment