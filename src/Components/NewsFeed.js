import React from 'react'
import "../Styles/NewsFeed.css"
import CreatePost from './CreatePost/CreatePost'
import PostContent from './PostContent/PostContent'
import StoryFeed from './Stories/StoryFeed'
import { UseProvider } from './StateProvider/StateProvider'

function NewsFeed() {

  const {postData,darkmode} = UseProvider()

  return (
    <div className={darkmode?'newsfeed-container active':'newsfeed-container'}>
        <StoryFeed/>
        <CreatePost/>
        

        {
          postData.map((data)=>{
            return <PostContent key={data.id} data={data}/>
          })
        }
         
       
      </div>
  )
}

export default NewsFeed