import React, { useState } from "react";
import { Box } from "@mui/system";
import Tutorial from "../components/mainPage/Tutorial";
import Info from "../components/mainPage/Info";
import "./mainPage.css";
import SelectToken from "../components/mainPage/SelectToken";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RefreshIcon from "@mui/icons-material/Refresh";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EvStationIcon from "@mui/icons-material/EvStation";
import ConnectWallet from "../components/layout/header/ConnectWallet";
import Share from "../components/mainPage/Share";
import { Avatar } from "@mui/material";
import SplineAreaChart from "../components/mainPage/SplineAreaChart";
import Settings from "../components/mainPage/Settings";
function MainPage() {
  const [actionType, setActionType] = useState("Maximum Return");
  const [time, setTime] = useState("1H");
  const [inputOne, setInputOne] = useState(0.0);
  const [inputTwo, setInputTwo] = useState(0.0);
  const [inputOneCurrency, setInputOneCurrency] = useState("Ethereum");
  const [inputTwoCurrency, setInputTwoCurrency] = useState("USDT");

  return (
    <div style={{ padding: 15, background: "black", color: "white" }}>
      <Box
        sx={{
          display: { md: "flex" },
        }}
      >
        {/* input form */}
        <div>
          {/* top buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                className="mainFont"
                style={{
                  color: "#1E57FA",
                  fontSize: 22,
                }}
              >
                Swap
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 15 }}>
                <Tutorial />
              </div>
              <div style={{ marginRight: 15 }}>
                <Info />
              </div>
              <div style={{ marginRight: 15 }}>
                <Share />
              </div>
              <div style={{ marginRight: 15 }}>
                <Settings />
              </div>
            </div>
          </div>
          {/* input form */}

          <div
            style={{
              background: "rgb(21, 23, 24)",
              boxShadow: "rgb(0 0 0 / 4%) 0px 4px 16px",
              padding: "16px 16px 24px",
              borderRadius: 20,
              margin: "20px 0",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                background: "black",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div
                 style={{
                  flex: "1 1 auto",
                }}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      fontSize: 18,
                      background: "black",
                      color: "white",
                      
                    }}
                    placeholder="0.0"
                    type="number"
                    value={inputOne}
                    onChange={(e) => setInputOne(e.target.value)}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <AccountBalanceWalletIcon />{" "}
                    <p style={{ margin: "0 10px" }}>0</p>
                  </div>
                  <SelectToken
                    selectedCurrency={inputOneCurrency}
                    setSelectedCurrency={setInputOneCurrency}
                    otherCurrency={inputTwoCurrency}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              <div
                style={{
                  background: "#0f0f0f",
                  borderRadius: 20,
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <RefreshIcon />
                <p
                  style={{
                    margin: "0 10px",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "rgb(178, 171, 161)",
                  }}
                >
                  1 ETH = 1642.85 USDT
                </p>
                {/* <SwapHorizIcon /> */}
              </div>
              <div
                style={{
                  background: "#0f0f0f",
                  borderRadius: 20,
                  padding: 6,
                  cursor: "pointer",
                }}
                onClick={() => {
                  console.log("CLICKED");
                  let iOne = inputOne;
                  setInputOne(inputTwo);
                  setInputTwo(iOne);
                  let iOneC = inputOneCurrency;
                  setInputOneCurrency(inputTwoCurrency);
                  setInputTwoCurrency(iOneC);
                  console.log(iOne, iOneC);
                }}
              >
                <SwapVertIcon />
              </div>
            </div>

            <div
              style={{
                padding: "10px 20px",
                background: "black",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    flex: "1 1 auto",
                  }}
                >
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      fontSize: 18,
                      background: "black",
                      color: "white",
                     
                    }}
                    placeholder="0.0"
                    type="number"
                    value={inputTwo}
                    onChange={(e) => setInputTwo(e.target.value)}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <AccountBalanceWalletIcon />{" "}
                    <p style={{ margin: "0 10px" }}>0</p>
                  </div>
                  <SelectToken
                    selectedCurrency={inputTwoCurrency}
                    setSelectedCurrency={setInputTwoCurrency}
                    otherCurrency={inputOneCurrency}
                  />
                </div>
              </div>
            </div>

            <p style={{ color: "rgb(178, 171, 161)" }}>Max Slippage: 0.5%</p>

            <div
              style={{
                background: "black",
                borderRadius: 30,
                display: "flex",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <div
                style={{
                  color: "rgb(178, 171, 161)",
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  justifyContent: "center",
                  background:
                    actionType === "Maximum Return" && "rgb(37, 40, 42)",
                  borderRadius: 30,
                  padding: "7px 0",
                  cursor: "pointer",
                }}
                onClick={() => setActionType("Maximum Return")}
              >
                <AttachMoneyIcon /> Maximum Return
              </div>
              <div
                style={{
                  color: "rgb(178, 171, 161)",
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  justifyContent: "center",
                  background: actionType === "Lowest Gas" && "rgb(37, 40, 42)",
                  borderRadius: 30,
                  padding: "7px 0",
                  cursor: "pointer",
                }}
                onClick={() => setActionType("Lowest Gas")}
              >
                <EvStationIcon /> Lowest Gas
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <ConnectWallet />
            </div>
          </div>
        </div>
        {/* graph */}
        <div style={{ padding: "5px 20px", width: "-webkit-fill-available" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src="/icons/Ethereum.png" sx={{ width: 24, height: 24 }} />
            <Avatar src="/icons/Polygon.png" sx={{ width: 24, height: 24 }} />
            <p style={{ fontSize: 24, margin: "0 0 0 15px" }}>ETH</p>
            <p style={{ fontSize: 24, margin: 0, color: "gray" }}> / USDT</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div>
              <p
                style={{
                  color: "rgb(178, 171, 161)",
                  margin: 0,
                }}
                className="currencyFont"
              >
                168.00 USDT
              </p>
              <p
                style={{
                  color: "#eb1313",
                  margin: 0,
                }}
              >
                -4.0002 (-0.26%)
              </p>
            </div>
            <div>
              <span
                style={{
                  background: time === "1H" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("1H")}
              >
                1H
              </span>
              <span
                style={{
                  background: time === "4H" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("4H")}
              >
                4H
              </span>
              <span
                style={{
                  background: time === "1D" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("1D")}
              >
                1D
              </span>
              <span
                style={{
                  background: time === "1W" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("1W")}
              >
                1W
              </span>
              <span
                style={{
                  background: time === "1M" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("1M")}
              >
                1M
              </span>
              <span
                style={{
                  background: time === "6M" && "#1E57FA",
                  borderRadius: 4,
                  padding: "2px 7px",
                  marginRight: 5,
                  cursor: "pointer",
                }}
                onClick={() => setTime("6M")}
              >
                6M
              </span>
            </div>
          </div>

          <SplineAreaChart timeFilter={time} />
        </div>
      </Box>
    </div>
  );
}

export default MainPage;
