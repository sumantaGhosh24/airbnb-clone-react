import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Button from "@mui/material/Button";

import "./Banner.css";
import Search from "./Search";

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and explore the world</h1>
        <h5>Plan a different kind of rooms near you.</h5>
        <Button
          onClick={() => history.push("/search")}
          className="banner__infoButton"
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
