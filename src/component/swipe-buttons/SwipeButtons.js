import React from "react";
import "./SwipeButtons.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-buttons-reply">
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-buttons-flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
