import React from 'react'

import { UseProvider } from '../StateProvider/StateProvider';


function LikeStatus({like}) {
    const style = {
        padding:"10px",
        color:"	#4267B2",
        fontWeight:"bold",
        display:"flex",
        alignItems:"center"
    }

  
  return (
            <>
                    
        <div className='likestatus-container' style={style}>
          {like} <p style={{marginLeft:"2px"}}>Like</p>
          
          </div>
    
            </>   
  )
}

export default LikeStatus