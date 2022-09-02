import React from "react";
import "../../css/test1.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductCard = ({ img }) => {
  return (
    <div className="card">
      <img className="imageArea" src={img} alt="" />
      <div className="textArea">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ padding: "0 6px", left: 180 }}
        >
          <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          sx={{ padding: "0 6px", left: 180 }}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </div>
      <hr className="product_line" />
    </div>
  );
};

export default ProductCard;
