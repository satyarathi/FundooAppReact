import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="fbox">
        <div className="menu">
          <MenuIcon />
        </div>
        <div className="logo">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="error"
          />
        </div>
        <div className="keep">Keep</div>
      </div>

      <div className="mbox">
        <div className="search">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="searchtype"
          size="70"
          placeholder="Search"
        />
        <div className="cross"></div>
      </div>

      <div className="lbox">
        <div className="box11">
          <div className="b1">
            <RefreshIcon />
          </div>
          <div className="b1">
            <ViewStreamIcon />
          </div>
          <div className="b1">
            <SettingsIcon />
          </div>
        </div>
        <div className="box12">
          <div className="app">
            <AppsIcon />
          </div>
          <div className="profile">
            <AccountCircleIcon />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
