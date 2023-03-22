import React, { useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./headerButton.css";

export default function Swap() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Swap");
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          onClick={(e) => {
            setOpen(!open);
            setAnchorEl(e.currentTarget);
          }}
        >
          <p className="headerFont">{selected}</p>
          <KeyboardArrowDownIcon className="headerFont" />
        </IconButton>
        <Menu
          id="menu-appbar"
          // anchorEl={anchorElUser}

          open={Boolean(open)}
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
            key={"faq"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center" color="white">
              Swap
            </Typography>
          </MenuItem>
          <MenuItem
            key={"review"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center" color="white">
              Limited Offer
            </Typography>
          </MenuItem>
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center" color="white">
              Bridge
            </Typography>
          </MenuItem>
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center" color="white">
              Buy Crypto
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
