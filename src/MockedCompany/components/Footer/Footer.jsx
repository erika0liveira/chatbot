import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomBox, FooterBox, FlexBox, Logo } from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export function Footer() {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <FooterBox>
        <FlexBox sx={{ width: xlDown ? "100vw" : "60vw" }}>
          <CustomBox>
            <Logo variant="h1" sx={{ fontSize: mdDown ? "1rem" : "1.5rem" }}>
              ROCKON STORE
            </Logo>
            <Typography sx={{ width: "100%" }}>Uma empresa DedSec</Typography>
          </CustomBox>

          <CustomBox>
            <Typography sx={{ width: "100%" }}>
              Nos siga nas redes sociais
            </Typography>
            <FacebookIcon color="secondary" cursor="pointer" />
            <InstagramIcon color="secondary" cursor="pointer" />
            <TwitterIcon color="secondary" cursor="pointer" />
          </CustomBox>
        </FlexBox>
      </FooterBox>
    </>
  );
}
