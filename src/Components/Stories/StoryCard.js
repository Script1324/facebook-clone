import React from 'react'
import "../../Styles/StoryCard.css"

function StoryCard({image,icon,name}) {
  return (
    <div className='storycard-container'>
            <div className='story-image'>
                    <img src='https://imgix.ranker.com/user_node_img/50081/1001612045/original/reality-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375' alt='story image'/>
            </div>
             <div className='story-avatar'>
                 <img src='https://imgix.ranker.com/user_node_img/50081/1001612045/original/reality-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375' alt='story image icon   '/>
            </div>
            <div className='story-name'>
                        <p>Warren Gaytero</p>
            </div>
    </div>
  )
}

export default StoryCard