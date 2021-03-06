import React from "react";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackButton from '@material-ui/icons/ArrowBackIos'

import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="header">
    {backButton? (
      <IconButton onClick={()=> history.replace(backButton)}>
        <ArrowBackButton fontSize="large" className="header-icon" />
       </IconButton>
       ): 
       (
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      )
    }
     

      <Link to="/">
        <img
          className="header-logo"
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header-icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
