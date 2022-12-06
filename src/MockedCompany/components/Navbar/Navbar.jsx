import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import { GridBox, CustomBox, Logo, Menu, NavbarBox } from "./styles";

export function Navbar() {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <NavbarBox>
        <GridBox>
          <Logo variant="h1" sx={{ fontSize: mdDown ? "1rem" : "2.5rem" }}>
            ROCKON STORE
          </Logo>
          <Box
            sx={{
              width: smDown ? 150 : mdDown ? 250 : lgDown ? 300 : 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth={lgDown ? false : true}
              label="Busca"
              id="outlined-name"
              color="secondary"
              focused
            />
          </Box>

          <CustomBox>
            <AccountCircleIcon color="secondary" cursor="pointer" />
            <ShoppingCartIcon color="secondary" cursor="pointer" />
          </CustomBox>
        </GridBox>

        <CustomBox sx={{ flexWrap: mdDown ? "wrap" : "nowrap" }}>
          <Menu>CAMISETAS</Menu>
          <Menu>PATCHES</Menu>
          <Menu>CD/VINIL</Menu>
          <Menu>POSTER</Menu>
          <Menu>BOTTOMS</Menu>
          <Menu>ACESSÓRIOS</Menu>
        </CustomBox>
      </NavbarBox>
    </>
  );
}
