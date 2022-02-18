import React from 'react'
import "../../Styles/StoryCard.css"

function StoryCard({name,icon,image}) {
  return (
    <div className='storycard-container'>
            <div className='story-image'>
                <img src={image} alt="iamge"/>       
             </div>
             <div className='story-avatar'>
                <img src={icon} alt="icon"/>
            </div>
            <div className='story-name'>
                        <p>{name}</p>
            </div>
    </div>
  )
}

export default StoryCard