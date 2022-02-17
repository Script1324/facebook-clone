import React,{useState} from 'react'
import "../../Styles/CreatePost.css"
import CreatePostOptions from './CreatePostOptions'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { UseProvider } from '../StateProvider/StateProvider';
import {Avatar} from "@mui/material"

function CreatePost() {

  const {user,addData} = UseProvider()

  const [val,setValue] = useState("")


  const addPost = (e) =>{

    e.preventDefault();
    
    const newPost = {
          image:"",
          post:val
        }

    addData(newPost)

      setValue("")
  }

  return (
    <div className='createpost-container'>

           <div> 
       <div className='createpost-user-icon'>
            <Avatar src={user.user.photoURL} />
       </div>
      
       <div className='createpost-input'>
         
          <form onSubmit={addPost}>
               <input type="text" value={val} onChange={(e)=> setValue(e.target.value)} placeholder="Create Post.."/>
               
          </form>
            
       </div>
            </div>
        
        <hr></hr>

        <div className='createpost-options-container'>
            <CreatePostOptions icon={<OndemandVideoIcon style={{color:"tomato"}}/>} text={"Live Video"}/>
            <CreatePostOptions icon={<InsertPhotoOutlinedIcon style={{color:"green"}}/>} text={"Photo/Video"}/>
            <CreatePostOptions icon={<EmojiEmotionsOutlinedIcon style={{color:"gold"}}/>} text={"Feeling/Activity"}/>
        </div>
            
    </div>
  )
}

export default CreatePost