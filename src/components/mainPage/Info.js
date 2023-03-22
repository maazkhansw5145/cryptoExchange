import React, { useState } from "react";
import { Box } from "@mui/system";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorOutline } from "@mui/icons-material";
export default function Info() {
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
          <ErrorOutline style={{ color: "white" }} />
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
                Info
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
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>Price</p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>$1,644</p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Trading Volume
            </p>

            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              $10,329,657,970
            </p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Market Cap Rank
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>#2</p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Market Cap
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              $198,103,954,393
            </p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />

          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              All-Time High
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>$4,878</p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              All-Time Low
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>$0.43</p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Circulating Supply
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              120,488,519
            </p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
          <MenuItem
            key={"logout"}
            onClick={() => {
              setOpen(!open);
              setAnchorEl(null);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              Contract Address
            </p>
            <p style={{ color: "darkgray", margin: 0, fontSize: 14 }}>
              0xC02...Cc2
            </p>
          </MenuItem>
          <hr
            style={{
              margin: "5px 10px",
              border: "1px solid gray",
            }}
          />
        </Menu>
      </Box>
    </div>
  );
}
