import { styled, Box, Typography } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  width: "65vw",
  margin: "0 auto",
}));

export const TopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Title = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "2rem",
  textAlign: "left",
  marginTop: "30px",
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "1rem",
  textAlign: "left",
  marginTop: "10px",
}));
