import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import "./headerButton.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

export default function SelectChain(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Ethereum");

  return (
    <>
      <button
        className="selectChainButton"
        onClick={() => setOpen(true)}
        style={{ alignItems: "center", padding: "5px 9px 7px 10px" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`/icons/${selected}.png`}
            width={20}
            height={20}
            alt="ether"
            style={{ marginRight: 10 }}
          />
          <p className="headerFont">{selected}</p>
          <KeyboardArrowDownIcon className="headerFont" />
        </div>
      </button>
      <div>
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
                  <p>Select a Chain</p>
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
                    backgroundColor: selected === "Ethereum" && "black",
                    borderRadius: selected === "Ethereum" && "20px",
                    padding: selected === "Ethereum" && "0px 20px",
                    marginTop:10
                  }}
                  className="selectChain"
                  onClick={() => setSelected("Ethereum")}
                >
                  <img
                    src="/icons/Ethereum.png"
                    width={20}
                    height={20}
                    alt="ether"
                  />
                  <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                    Ethereum
                  </p>
                  {selected === "Ethereum" && (
                    <div
                      style={{
                        background: "rgb(39, 162, 126)",
                        width: 15,
                        height: 15,
                        borderRadius: 40,
                        marginLeft: 15,
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: selected === "BNBChain" && "black",
                    borderRadius: selected === "BNBChain" && "20px",
                    padding: selected === "BNBChain" && "0px 20px",
                    marginTop:10

                  }}
                  className="selectChain"
                  onClick={() => setSelected("BNBChain")}
                >
                  <img
                    src="/icons/BNBChain.png"
                    width={20}
                    height={20}
                    alt="ether"
                  />
                  <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                    BNB Chain
                  </p>
                  {selected === "BNBChain" && (
                    <div
                      style={{
                        background: "rgb(39, 162, 126)",
                        width: 15,
                        height: 15,
                        borderRadius: 40,
                        marginLeft: 15,
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: selected === "Polygon" && "black",
                    borderRadius: selected === "Polygon" && "20px",
                    padding: selected === "Polygon" && "0px 20px",
                    marginTop:10

                  }}
                  className="selectChain"
                  onClick={() => setSelected("Polygon")}
                >
                  <img
                    src="/icons/Polygon.png"
                    width={20}
                    height={20}
                    alt="ether"
                  />
                  <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                    Polygon
                  </p>
                  {selected === "Polygon" && (
                    <div
                      style={{
                        background: "rgb(39, 162, 126)",
                        width: 15,
                        height: 15,
                        borderRadius: 40,
                        marginLeft: 15,
                      }}
                    />
                  )}
                </div>
              </Box>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
