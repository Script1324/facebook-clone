import React from 'react';
import "../Styles/Header.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import AirplayIcon from '@mui/icons-material/Airplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { UseProvider } from './StateProvider/StateProvider';



function Header() {

        const{toggleDarkMode,darkmode} = UseProvider()

  return <div className={darkmode ? 'header-container active': 'header-container' } >
            <section className='left-section'>
                    <div className='fb-logo'>
                            <FacebookOutlinedIcon style={{fontSize:"40px",color:"#4267B2"}}/>
                    </div>
                    <div className="search-icon">
                          <i><SearchIcon/></i>
                        <input type="text" placeholder="search facebook.."/>
                    </div>
            </section>
            
            <section className='center-section'>
                    
                    <div><HomeIcon style={{color:"#4267B2",fontSize:"30px"}}/></div>
                    <div><LayersIcon style={{color:"grey",fontSize:"30px"}}/></div>
                    <div><AirplayIcon style={{color:"grey",fontSize:"30px"}}/></div>
                    <div><StorefrontIcon style={{color:"grey",fontSize:"30px"}}/></div>
                    <div><SportsEsportsIcon style={{color:"grey",fontSize:"30px"}}/></div>
           
            </section>

            <section className='right-section'>
                   
                   <div><HomeIcon/></div>
                    <div>{darkmode ?  <LightModeOutlinedIcon onClick={toggleDarkMode}/> :  <DarkModeOutlinedIcon onClick={toggleDarkMode}/>}</div>
                    <div><MapsUgcOutlinedIcon/></div>
                    <div><NotificationsNoneOutlinedIcon/></div>
                    <div><KeyboardArrowDownOutlinedIcon/></div>
            </section>
  </div>;
}

export default Header;
