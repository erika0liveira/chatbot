import { styled, Box, Typography } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));

export const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "20% 1fr 20%",
  placeItems: "center",
  justifyItems: "center",
  width: "100%",
}));

export const Title = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "2rem",
  textAlign: "center",
  marginTop: "30px",
}));

export const ArrowLeft = styled(Box)(({ theme }) => ({
  justifySelf: "flex-end",
  padding: "20px",
  cursor: "pointer",
}));

export const ArrowRight = styled(Box)(({ theme }) => ({
  justifySelf: "flex-start",
  padding: "20px",
  cursor: "pointer",
}));
