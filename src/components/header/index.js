import React from "react";

import { Avatar, Box, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./styles.scss";

// import axios from "axios";

export default function Header() {
  return (
    <Box className="menu-class-name">
      <Box className="define-header-size">
        <Box className="buttons-area">
          <Button classes={{ root: "button-style" }}>Produtos</Button>
          <Button classes={{ root: "button-style" }}>Estoque</Button>
          <Button classes={{ root: "button-style" }}>Pedidos</Button>
          <Button classes={{ root: "button-style" }}>Vendas</Button>
        </Box>

        <Box className="avatar-area">
          <Avatar alt="Remy Sharp" />

          <ArrowDropDownIcon />
        </Box>
      </Box>
    </Box>
  );
}
