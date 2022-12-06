import { styled, Box, Typography } from "@mui/material";

export const NavbarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  height: "140px",
  padding: "20px 0",
  backgroundColor: "#121212",
}));

export const GridBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
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
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
}));

export const Menu = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: "1rem",
  color: "#D6D6D6",
  cursor: "pointer",
}));
