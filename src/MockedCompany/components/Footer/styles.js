import { styled, Box, Typography } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  height: "140px",
  padding: "20px 0",
  marginTop: "50px",
  backgroundColor: "#121212", 
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  placeItems: "center",
  textAlign: "center",
}));

export const Logo = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  textAlign: "left",
  color: "#D6D6D6",
  cursor: "pointer",
  fontSize: "20px",
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));
