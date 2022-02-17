import React from 'react'
import "../../Styles/PostImage.css"

function PostImage({image}) {
  return (
      <>
          {image?  
    <div className='postimage-container'>
        <img src={image} alt="this is the post image"/>
    </div> : null}
      </>
  )
}

export default PostImage