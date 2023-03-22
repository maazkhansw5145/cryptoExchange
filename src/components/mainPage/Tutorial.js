import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
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

export default function Tutorial(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} style={{
        background:'black',
        border:'none',
        color:'white',
        cursor:'pointer'
      }}>
        <SlowMotionVideoIcon />
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
        <Box sx={{ ...style, maxWidth: 500, width:'80%', border: "none" }}>
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
                <p>Tutorial</p>
              </div>
              <div>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <iframe
            width="100%"
              height="480"
              src={`https://www.youtube.com/watch?v=f_OPjYQovAE&ab_channel=TED-Ed`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
