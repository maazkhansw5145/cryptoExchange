import React from "react";
import { Box } from "@mui/system";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#080B16",
        borderBottomColor: "rgba(140, 130, 115, 0.1)",
        alignItems: "center",
        padding: "16px 25px",
        marginTop: "auto",
        justifyContent: "space-between",
      }}
      sx={{
        display: { lg: "flex" },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", color: "white",justifyContent:'center' }}>
        <p>Powered by</p>
        <p style={{ margin: "0 20px" }}>Audit by</p>
      </div>
      <div style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
      <div style={{ display: "flex",color:'white',marginRight:10 }}>
          <TelegramIcon />
          <TwitterIcon />
        </div>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <button
            style={{
              border: "none",
              borderRadius: 20,
              padding: "10px 20px",
              background: "#1E57FA",
              color: "white",
            }}
          >
            Support
          </button>
        </Box>
        
      </div>
    </Box>
  );
}

export default Footer;
