import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
  background: "rgb(37, 40, 42)",
  borderRadius: 8,
};

export default function Share(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "black",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ShareIcon />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={{ ...style, maxWidth: 500,width:'80%', border: "none" }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                alignItems: "center",
              }}
            >
              <div>
                <p>Share this with your friends</p>
              </div>
              <div>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around",margin:'20px 0',color:'white' }}>
              <TelegramIcon style={{fontSize:40}} />
              <TwitterIcon style={{fontSize:40}} />
              <FacebookIcon style={{fontSize:40}} />
            </div>
            <div style={{background:'black',borderRadius:40,color:"white",padding:10,marginTop:40}}>
                <p style={{margin:0}}>localhost:3000</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
