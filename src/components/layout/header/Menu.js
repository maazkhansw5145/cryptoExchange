import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./headerButton.css";

export default function MenuComponent() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Button
        onClick={(e) => {
          setOpen(!open);
          setAnchorEl(e.currentTarget);
        }}
      >
        <MenuIcon style={{ color: "white" }} />
      </Button>
      <Menu
        open={open}
        onClose={(e) => {
          setOpen(!open);
          setAnchorEl(null);
        }}
        anchorEl={anchorEl}
        PaperProps={{
          style: {
            width: 163,
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#141414",
          },
        }}
      >
        <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Referral
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Docs
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Road map
        </MenuItem> <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Forum
        </MenuItem> <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Blog
        </MenuItem> <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Terms
        </MenuItem> <MenuItem
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(null);
          }}
          style={{ color: "white" }}

        >
          Help
        </MenuItem> 
      </Menu>
    </div>
  );
}
