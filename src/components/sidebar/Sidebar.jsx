import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import OrdersIcon from "@mui/icons-material/CreditCard";
import DeliveryIcon from "@mui/icons-material/LocalShippingOutlined";
import StatsIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import InputOutIcon from "@mui/icons-material/InputOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">lamadmin</span>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <UserIcon className="icon" />
            <span>User</span>
          </li>
          <li>
            <ProductIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <OrdersIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <DeliveryIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <StatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <InputOutIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <InputOutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
