import React from 'react'
import "../Styles/Widget.css"
import { UseProvider } from './StateProvider/StateProvider'

function Widget() {
  const{darkmode} = UseProvider()

  return (
    <div className={darkmode? 'widget-container active':'widget-container' }>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe-HangOverz-106368017487614%2F&tabs=timeline&width=340&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="1000" style={{border:"none",overflow:"hidden",boxShadow:"0 2px 5px rgb(219, 213, 213)"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
  )
}

export default Widget