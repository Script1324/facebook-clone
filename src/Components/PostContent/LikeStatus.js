import React from 'react'

import { UseProvider } from '../StateProvider/StateProvider';


function LikeStatus() {
    const style = {
        padding:"10px",
        color:"	#4267B2",
        fontWeight:"bold",
        display:"flex",
        alignItems:"center"
    }

    const {like} = UseProvider()

  return (
            <>
                    
          {like == 0 ?  null : <div className='likestatus-container' style={style}>
          {like} <p>Like</p></div>}
    
            </>   
  )
}

export default LikeStatus