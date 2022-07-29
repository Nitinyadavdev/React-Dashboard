import "./navbar.scss";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutIcon className="icon" />
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/5720781/pexels-photo-5720781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
