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
    document.getElementById('border-scroll').style.boxShadow = " 0px 50px 25px white"
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
        <div className='p-info'>

          <div className='info-flight'>
            <div className='img-flight'></div>
            <div className='text'>
              <p>14+</p>
              <p>Penerbangan</p>
            </div>
          </div>
          <div className='info-pax'>
            <div className='img-pax'></div>
            <div className='text'>
              <p>500+</p>
              <p>Penumpang</p>
            </div>
          </div>
          <div className='info-partner'>
            <div className='img-partner'></div>
            <div className='text'>
              <p>25+</p>
              <p>Mitra Kami</p>
            </div>
          </div>
        </div>
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
        }}>
          <div id="border-scroll" className='c-border-scroll'>
            <div className='border-scroll'></div>
          </div>
          <div id="box-cards" className='box-card' onScroll={()=> scrollFunction()}>
          <h6>Ruangan tersedia</h6>
          <div className='slide-card'>
            <div className='cards'>
              <div className='img-card'></div>
              <div className='text-card'>
                <p>Ruang A01</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card2'></div>
              <div className='text-card'>
                <p>Ruang A02</p>
                <p>Rp. 700.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card3'></div>
              <div className='text-card'>
                <p>Ruang A03</p>
                <p>Rp. 600.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card4'></div>
              <div className='text-card'>
                <p>Ruang A04</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card5'></div>
              <div className='text-card'>
                <p>Ruang A05</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
          </div>

          <h6>Papan iklan tersedia</h6>
          <div className='slide-card'>
            <div className='cards'>
              <div className='img-card-ads'></div>
              <div className='text-card'>
                <p>Ruang A01</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card-ads2'></div>
              <div className='text-card'>
                <p>Ruang A02</p>
                <p>Rp. 700.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card-ads3'></div>
              <div className='text-card'>
                <p>Ruang A03</p>
                <p>Rp. 600.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card-ads4'></div>
              <div className='text-card'>
                <p>Ruang A04</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card-ads5'></div>
              <div className='text-card'>
                <p>Ruang A05</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
          </div>

        </div> 
      </div> 
      </Slide>
      }
      {!scroll && <div id="p-home" className='p-home' style={{ marginTop : "40px" }}>
        <div id="box-cards" className='box-card' onScroll={()=> scrollFunction()}>
          <h6>Ruangan tersedia</h6>
          <div className='slide-card'>
            <div className='cards'>
              <div className='img-card'></div>
              <div className='text-card'>
                <p>Ruang A01</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card2'></div>
              <div className='text-card'>
                <p>Ruang A02</p>
                <p>Rp. 700.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card3'></div>
              <div className='text-card'>
                <p>Ruang A03</p>
                <p>Rp. 600.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card4'></div>
              <div className='text-card'>
                <p>Ruang A04</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card5'></div>
              <div className='text-card'>
                <p>Ruang A05</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
          </div>

          <h6>Papan iklan tersedia</h6>
          <div className='slide-card'>
            <div className='cards'>
              <div className='img-card'></div>
              <div className='text-card'>
                <p>Ruang A01</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card2'></div>
              <div className='text-card'>
                <p>Ruang A02</p>
                <p>Rp. 700.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card3'></div>
              <div className='text-card'>
                <p>Ruang A03</p>
                <p>Rp. 600.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card4'></div>
              <div className='text-card'>
                <p>Ruang A04</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card5'></div>
              <div className='text-card'>
                <p>Ruang A05</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
          </div>

          <h6>Papan iklan tersedia</h6>
          <div className='slide-card'>
            <div className='cards'>
              <div className='img-card'></div>
              <div className='text-card'>
                <p>Ruang A01</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card2'></div>
              <div className='text-card'>
                <p>Ruang A02</p>
                <p>Rp. 700.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card3'></div>
              <div className='text-card'>
                <p>Ruang A03</p>
                <p>Rp. 600.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card4'></div>
              <div className='text-card'>
                <p>Ruang A04</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
            <div className='cards'>
              <div className='img-card5'></div>
              <div className='text-card'>
                <p>Ruang A05</p>
                <p>Rp. 500.000 / bulan</p>
              </div>
            </div>
          </div>
        </div>  
      </div>}
      
    </div>
  </>)
}

export default Home;