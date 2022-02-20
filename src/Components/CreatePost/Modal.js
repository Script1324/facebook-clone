import React from 'react'
import { UseProvider } from '../StateProvider/StateProvider'
import "../../Styles/Modal.css"

function Modal() {

    const {modalVal,setmodalVal,toggleModal} = UseProvider()


  return (
      <>
    <div className="modal-container">
        <h4>Paste Image Link Here..</h4>
            <input type="text" value={modalVal} onChange={(e)=>{setmodalVal(e.target.value)}} placeholder='image link...' />
            {modalVal.length === 0 ?<button type="button" style={{display:"none"}} disabled>Enter</button> : <button type="button" onClick={toggleModal}>Enter</button>}
            
    </div>

    <div className="modal-backdrop" onClick={toggleModal}>

    </div>

    </>
  )
}

export default Modal