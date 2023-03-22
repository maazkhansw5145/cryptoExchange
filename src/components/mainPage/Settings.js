import React, { useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
export default function Settings() {
  const [open, setOpen] = useState(false);
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
          <SettingsIcon style={{ color: "white" }} />
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
              width: 380,
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 600,
                  marginLeft: 15,
                }}
              >
                Settings
              </p>
            </div>
            <div>
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            </div>
          </MenuItem>
          <MenuItem
            key={"review"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center" color="white">
              Max Slippage
            </Typography>
          </MenuItem>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Transaction time limit
            </p>
            <input
              style={{
                outline: "none",
                border: "none",
                fontSize: 18,
                background: "black",
                color: "white",
                width: 100,
                padding: "2px 0 0 10px",
                borderRadius:10
              }}
              placeholder="0.0"
              type="number"
              value={"20 mins"}
            />
          </MenuItem>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Advanced Mode
            </p>
            <Switch defaultChecked />
          </MenuItem>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Liquidity Sources
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              15 out of 15 selected
            </p>
          </MenuItem>
          <hr />
          <p
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              margin: "0 0 10px 15px",
            }}
          >
            Display Settings
          </p>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Trending Soon
            </p>
            <Switch defaultChecked />
          </MenuItem>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Live Chart
            </p>
            <Switch defaultChecked />
          </MenuItem>
          <MenuItem
            key={"logout"}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Trade Route
            </p>
            <Switch defaultChecked />
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
