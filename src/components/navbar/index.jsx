import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import './navbar.scss';

const ResponsiveAppBar = () => {
  
  return (<>
    <div className='c-navbar'>
      <div className='p-navbar'>
        <div className='icon-home'>
          <HomeRoundedIcon />
        </div>
        <div className='icon-list'>
          <BallotOutlinedIcon />
        </div>
        <div className='icon-phone'>
          <CallOutlinedIcon />
        </div>
      </div>
    </div>
  </>);
};

export default ResponsiveAppBar;
