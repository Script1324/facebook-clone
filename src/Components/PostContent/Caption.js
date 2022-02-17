import React from 'react'
import "../../Styles/Caption.css"

function Caption({caption}) {
  return (
    <div className='caption-container'>
           {caption}
    </div>
  )
}

export default Caption