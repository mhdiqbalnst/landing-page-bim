import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import './navbar.scss';

const ResponsiveAppBar = () => {
  
  return (<>
    <div className='c-navbar'>
      <div className='p-navbar'>
        <div className='icon-phone'>
          <WhatsAppIcon />
        </div>
        <div className='icon-home'>
          <HomeRoundedIcon />
        </div>
        <div className='icon-list'>
          <BallotOutlinedIcon />
        </div>
      </div>
    </div>
  </>);
};

export default ResponsiveAppBar;
