import { Box, styled } from "@mui/material";

export const BotBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "flex-start",
  position: "fixed",
  height: "600px",
  right: "2.5%",
  top: "25%",
  borderRadius: "10px",
  zIndex: "1",
  boxSizing: "border-box",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  backgroundColor: "#fff",
  justifyContent: "center",
}));

export const BotHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "35px",
  padding: "0 20px",
  borderBottom: "1px solid #737373",
}));

export const PresentationBot = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  width: "100%",
  height: "100px",
  padding: "0 20px",
  backgroundColor: "#bdbdbd",
  borderBottom: "1px solid #737373",
}));

export const MiddleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "space-between",
  flexWrap: "wrap",
  height: "430px",
}));

export const NameBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "350px",
  margin: "80px auto",
  color: "#737373",
}));
