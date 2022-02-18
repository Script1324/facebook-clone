import React from 'react'
import "../../Styles/StoryFeed.css"
import StoryCard from './StoryCard'

function StoryFeed() {
  return (
    <div className="storyfeed-container" id='storyfeed'>
          <StoryCard name={"Uchiha Madara"} icon={'https://otakukart.com/wp-content/uploads/2020/07/Madara-Rinnegan.jpg'} image={'https://otakukart.com/wp-content/uploads/2020/07/Madara-Rinnegan.jpg'}/>
          <StoryCard name={"Minato "} icon={'https://otakukart.com/wp-content/uploads/2020/05/Minato.png'} image={'https://wallpaperaccess.com/full/1972496.jpg'}/>
          <StoryCard name={"Pain"} icon={'https://m.media-amazon.com/images/M/MV5BMjM4NzYzODU0Nl5BMl5BanBnXkFtZTgwMTM1ODI0MjE@._V1_FMjpg_UX1000_.jpg'} image={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/pain-six-paths-from-naruto.jpg'}/>
          <StoryCard name={"Hashirama"} icon={'https://en.memesrandom.com/wp-content/uploads/2020/11/hashirama-modo-sabio.jpg'} image={'https://staticg.sportskeeda.com/editor/2022/01/7f5a9-16431255279158-1920.jpg'}/>
          <StoryCard name={"Naruto"} icon={'https://p325k7wa.twic.pics/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg?twic=v1/cover=760x844/step=10/quality=80'} image={'https://images5.alphacoders.com/413/413842.jpg'}/>
          <StoryCard name={"Sasuke"} icon={'https://wegotthiscovered.com/wp-content/uploads/2021/10/maxresdefault-62.jpg'} image={'https://media.comicbook.com/2021/01/boruto-manga-chapter-54-spoilers-sasuke-eye-injury-sharingan-rin-1253618.jpeg?auto=webp'}/>
    </div>
  )
}

export default StoryFeed