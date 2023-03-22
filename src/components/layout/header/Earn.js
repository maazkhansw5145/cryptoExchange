import React, { useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Earn() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Pools");
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
            value={"Pools"}
            style={{ color: "white" }}
            onClick={(e) => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            Pools
          </MenuItem>
          <MenuItem
            value={"My Pools"}
            style={{ color: "white" }}
            onClick={(e) => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            My Pools
          </MenuItem>
          <MenuItem
            value={"Forums"}
            style={{ color: "white" }}
            onClick={(e) => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            Forums
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
