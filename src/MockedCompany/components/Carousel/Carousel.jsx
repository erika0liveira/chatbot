import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Img01 from "../../assets/carousel/img-01.png";
import { ArrowLeft, ArrowRight, GridBox, MainBox, Title } from "./styles";

export function Carousel() {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <MainBox>
      <Title variant="h1">NOVIDADES</Title>

      <div style={{ width: "70vw" }}>
        <GridBox>
          <ArrowLeft sx={{ display: lgDown ? "none" : "flex" }}>
            <ArrowBackIosIcon fontSize={lgDown ? "small" : "large"} />
          </ArrowLeft>

          <Box
            component={Paper}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="0"
            width={lgDown ? "70vw" : "100%"}
            minHeight={
              mdDown ? "100px" : lgDown ? "200px" : xlDown ? "250px" : "400px"
            }
            maxHeight={
              mdDown ? "100px" : lgDown ? "200px" : xlDown ? "250px" : "400px"
            }
            margin="30px auto"
            style={{
              background: "center",
              backgroundImage: `url(${Img01})`,
              backgroundSize: mdDown ? "100%" : "80%",
              backgroundRepeat: "no-repeat",
              boxShadow: "none",
            }}
          />

          <ArrowRight sx={{ display: lgDown ? "none" : "flex" }}>
            <ArrowForwardIosIcon fontSize={lgDown ? "small" : "large"} />
          </ArrowRight>
        </GridBox>
      </div>
    </MainBox>
  );
}
