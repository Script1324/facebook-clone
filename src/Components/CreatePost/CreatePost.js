import React,{useState} from 'react'
import "../../Styles/CreatePost.css"
import CreatePostOptions from './CreatePostOptions'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { UseProvider } from '../StateProvider/StateProvider';
import {Avatar} from "@mui/material"
import {serverTimestamp} from "firebase/firestore"

import Modal from './Modal';
import ReactDOM from 'react-dom';


function CreatePost() {

  const {user,addData,modalVal,setmodalVal,toggleModal,modal} = UseProvider()

  const [val,setValue] = useState("")


  const addPost = (e) =>{

    e.preventDefault();
    
    const newPost = {
          image:modalVal,
          post:val,
          like:0,
          time:serverTimestamp()
        }

    addData(newPost)

      setValue("")
      setmodalVal("")
  }

  return (
    <>    <div className='createpost-container'>

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
          <div onClick={toggleModal}>  <CreatePostOptions icon={<InsertPhotoOutlinedIcon style={{color:"green"}}/>} text={"Photo/Video"}/> </div>
            <CreatePostOptions icon={<EmojiEmotionsOutlinedIcon style={{color:"gold"}}/>} text={"Feeling/Activity"}/>
        </div>
            
    </div>

    {ReactDOM.createPortal(
         modal ? <Modal/> : null ,document.querySelector('#modal')
      )}


    </>
  )
}

export default CreatePost