import React from 'react'
import "../../Styles/PostContent.css"
import Caption from './Caption'
import Header from './Header'
import LikeStatus from './LikeStatus'
import PostImage from './PostImage'
import PostOptions from './PostOptions'
import Comment from "./Comment"
import { UseProvider } from '../StateProvider/StateProvider'

function PostContent({data}) {
const {darkmode} =UseProvider()

  return (
    <div className={darkmode ? 'postcontent-container active':'postcontent-container'}>
        <Header data_Id={data.id}/>
        <Caption caption={data.post}/>
        <PostImage image={data.image}/>
        <LikeStatus like={data.like}/>
        <PostOptions id={data.id}/>
        <Comment id={data.id} comments={data.comment} />
    </div>
  )
}

export default PostContent