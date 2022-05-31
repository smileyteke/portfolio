import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
     <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            I.T.DEV
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+61 0410 477024</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span><a href="mailto:ismailteke887@gmail.com">ismailteke887@gmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      </div>
   
  );
}
