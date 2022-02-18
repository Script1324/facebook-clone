import React,{useState} from 'react'
import "../../Styles/PostOptions.css"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import {UseProvider} from "../StateProvider/StateProvider"

function PostOptions({id}) {

  const {likePost} = UseProvider()

  return (
    <div className='postoptions-container'>
        <div onClick={()=> likePost(id)}>
        <ThumbUpOutlinedIcon/> <p>Like</p>
        </div>
        <div>
        <ModeCommentOutlinedIcon/> <p>Comment</p>
        </div>
        <div>
        <ScreenShareOutlinedIcon/> <p>Share</p>
        </div>
     
    </div>
  )
}

export default PostOptions