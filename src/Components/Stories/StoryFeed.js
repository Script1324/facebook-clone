import React from 'react'
import "../../Styles/StoryFeed.css"
import StoryCard from './StoryCard'

function StoryFeed() {
  return (
    <div className="storyfeed-container" id='storyfeed'>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
          <StoryCard/>
    </div>
  )
}

export default StoryFeed