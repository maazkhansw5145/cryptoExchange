import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import "./headerButton.css";

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

export default function ConnectWallet(props) {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <button
        style={{
          backgroundColor: "rgb(30, 87, 250,0.2)",
          borderRadius: 40,
          border: "none",
          padding: "10px 12px 10px 5px",
          width: "-webkit-fill-available",
          curor:'pointer'
        }}
        onClick={() => setOpen(true)}
      >
        <p className="headerFont">Connect Wallet</p>
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
                <p>Connect Your Wallet</p>
              </div>
              <div>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>

            <Box sx={{display: {md:'flex'},justifyContent:{md:'space-around'}}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginTop:10

                }}
                className="selectChain"
                onClick={() => setOpen(false)}

              >
                <img
                  src="/icons/Ethereum.png"
                  width={20}
                  height={20}
                  alt="ether"
                />
                <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                  Coinbase
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginTop:10

                }}
                onClick={() => setOpen(false)}

                className="selectChain"
              >
                <img
                  src="/icons/Metamask.png"
                  width={20}
                  height={20}
                  alt="ether"
                />
                <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                  Metamask
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  
                  cursor: "pointer",
                  marginTop:10
                
                }}
                onClick={() => setOpen(false)}

                className="selectChain"
              >
                <img
                  src="/icons/WalletConnect.png"
                  width={20}
                  height={20}
                  alt="ether"
                />
                <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                  WalletConnect
                </p>
              </div>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
