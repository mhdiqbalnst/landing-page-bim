import './home.scss';
import Navbar from '../../components/navbar';
import home_img from '../../images/web1.jpg'

const Home = () => {
  return(<>
  <Navbar />
  <div className='c-welcome' style={{ backgroundColor : "red",width : "100%", height : "100vh" }}>
    
    <div className='img-top'></div>
  </div>
  
  <div style={{ backgroundColor : "blue",width : "100%", height : "100vh" }}></div>
  </>)
}

export default Home;