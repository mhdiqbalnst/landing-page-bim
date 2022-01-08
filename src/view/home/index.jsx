import './home.scss';
import { useState } from 'react';
import Navbar from '../../components/navbar';
import logo from '../../images/logopng2.png';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide from '@mui/material/Slide';

const Home = () => {
 const [scroll, setScroll] = useState(false);

//  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const box = document.getElementById('box-cards');

  if ( box.scrollTop > 0) {
    setScroll(true);
    document.getElementById('c-info').style.display = "none";
    document.getElementById('c-home').style.overflowY = "hidden";
    
    document.getElementById('p-home').style.overflowY = "hidden";
  } else {
    setScroll(false);
    document.getElementById('c-info').style.display = "inline-block";
    document.getElementById('c-home').style.overflowY = "hidden";
    box.style.overflowY = "hidden";
    document.getElementById('p-home').style.overflowY = "hidden";
  }
}

  return(<>
    <Navbar />
    <div id="c-home" className='c-home'> 
      <div id="p-welcome" className='p-welcome'>
        <div className='img-welcome'>
          <span>
            <MyLocationOutlinedIcon />
            <p>Bandara Internasional Minangkabau</p>
          </span>
          <img src={logo} alt="" />
        </div>  
        <div className='text-welcome'>
          <h3>Temukan tempat terbaik untuk usaha anda</h3>
        </div>
      </div>
      <div id='c-info' className='c-info'>
        <div className='p-info'></div>
      </div>
      {scroll &&  
      <Slide direction="up" in={true} 
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 700 } : {})}
        >
       
      <div id="p-home" className='p-home' 
        style={{ 
          top : "85px",
          height : "85vh",
          overflowY : "auto",
          borderTopLeftRadius : "15px",
          borderTopRightRadius : "15px", 
          paddingTop : "50px"
        }}>
            <div id="box-cards" className='box-card' onScroll={()=> scrollFunction()}>
          <h6>Ruangan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>

          <h6>Papan Iklan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>

          <h6>Papan Iklan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>
        </div> 
      </div> 
      </Slide>
      }
      {!scroll && <div id="p-home" className='p-home' >
        <div id="box-cards" className='box-card' onScroll={()=> scrollFunction()}>
          <h6>Ruangan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>

          <h6>Papan Iklan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>

          <h6>Papan Iklan Tersedia</h6>
          <div className='slide-card'>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
            <div className='cards'></div>
          </div>
        </div>  
      </div>}
      
    </div>
  </>)
}

export default Home;