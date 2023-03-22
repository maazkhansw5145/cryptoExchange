import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import "./mainPage.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  background: "rgb(37, 40, 42)",
  borderRadius: 8,
};

export default function SelectToken(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="selectChainButton" onClick={() => setOpen(true)}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`/icons/${props.selectedCurrency}.png`}
            width={20}
            height={20}
            alt="ether"
            style={{ marginRight: 10 }}
          />
          <p className="headerFont">{props.selectedCurrency}</p>
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
          <Box sx={{ ...style, maxWidth: 500, width: "80%", border: "none" }}>
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
                  <p>Select a token</p>
                </div>
                <div>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>

              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: { md: "space-around" },
                }}
              >
                {props.otherCurrency !== "Ethereum" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      backgroundColor: props.selectedCurrency === "Ethereum" && "black",
                      borderRadius: props.selectedCurrency === "Ethereum" && "20px",
                      padding: props.selectedCurrency === "Ethereum" && "0px 20px",
                    }}
                    className="selectChain"
                    onClick={() => {
                      props.setSelectedCurrency("Ethereum");
                      setOpen(false);
                    }}
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
                    {props.selectedCurrency === "Ethereum" && (
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
                )}

                {props.otherCurrency !== "BNBChain" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      backgroundColor: props.selectedCurrency === "BNBChain" && "black",
                      borderRadius: props.selectedCurrency === "BNBChain" && "20px",
                      padding: props.selectedCurrency === "BNBChain" && "0px 20px",
                    }}
                    className="selectChain"
                    onClick={() => {
                      props.setSelectedCurrency("BNBChain");
                      setOpen(false);
                    }}
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
                    {props.selectedCurrency === "BNBChain" && (
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
                )}

                {props.otherCurrency !== "Polygon" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      backgroundColor: props.selectedCurrency === "Polygon" && "black",
                      borderRadius: props.selectedCurrency === "Polygon" && "20px",
                      padding: props.selectedCurrency === "Polygon" && "0px 20px",
                    }}
                    className="selectChain"
                    onClick={() => {
                      props.setSelectedCurrency("Polygon");
                      setOpen(false);
                    }}
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
                    {props.selectedCurrency === "Polygon" && (
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
                )}
              </Box>

              <Box
                sx={{
                  display: { md: "flex" },
                  justifyContent: { md: "space-around" },
                }}
              >
                {props.otherCurrency !== "USDT" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      backgroundColor: props.selectedCurrency === "USDT" && "black",
                      borderRadius: props.selectedCurrency === "USDT" && "20px",
                      padding: props.selectedCurrency === "USDT" && "0px 20px",
                    }}
                    className="selectChain"
                    onClick={() => {
                      props.setSelectedCurrency("USDT");
                      setOpen(false);
                    }}
                  >
                    <img
                      src="/icons/USDT.png"
                      width={20}
                      height={20}
                      alt="ether"
                    />
                    <p style={{ color: "rgb(178, 171, 161)", marginLeft: 15 }}>
                      USDT
                    </p>
                    {props.selectedCurrency === "USDT" && (
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
                )}
              </Box>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
