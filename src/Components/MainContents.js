import React from 'react'
import SideNav from './SideNav'
import NewsFeed from './NewsFeed'
import Widget from './Widget'

import "../Styles/MainContents.css"

function MainContents() {
  return (
    <div className='maincontents-container'>
        <SideNav/>
        <NewsFeed/>
        <Widget/>

    </div>
  )
}

export default MainContents