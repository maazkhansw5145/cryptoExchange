import React from "react";
import Swap from "./header/Swap";
import Earn from "./header/Earn";
import Menu from "./header/Menu";
import { Box } from "@mui/system";
import ConnectWallet from "./header/ConnectWallet";
import SelectChain from "./header/SelectChain";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#080B16",
        borderBottomColor: "rgba(140, 130, 115, 0.1)",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{marginTop:10}}>
          <img width={120} height={80} src="/logoWhite.png" alt="logo" />
        </div>
        <Swap />
        <Earn />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <div style={{ margin: "0 20px" }}>
            <SelectChain />
          </div>
          <div>
            <ConnectWallet />
          </div>
          <div>
            <Menu />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Header;
