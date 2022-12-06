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

export const MiddleMessageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "space-between",
  height: "90%",
}));

export const MessageBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "20px",
  height: "auto",
  padding: "20px 0px",
}));

export const Baloon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  overflowWrap: "anywhere",
  width: "80%",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#D9D9D9",
  margin: "0 auto",
}));

export const MiddleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "space-between",
  flexWrap: "wrap",
  height: "430px",
}));
