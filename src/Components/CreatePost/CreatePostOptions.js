import React from 'react'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import "../../Styles/CreatePostOptions.css"

function CreatePostOptions({icon,text}) {
  return (
    <div className='createpostoptions-container'>
        <i> {icon} </i> <p>{text}</p>
    </div>
  )
}

export default CreatePostOptions