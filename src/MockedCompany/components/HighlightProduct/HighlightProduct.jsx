import SendIcon from "@mui/icons-material/Send";
import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Shirt01 from "../../assets/shirts/shirt-01.jpeg";
import { MainBox, SubTitle, Title, TopBox } from "./styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const HighlightProduct = ({ title }) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  const shirts = [
    {
      img: "https://www.metallica.com/dw/image/v2/BCPJ_PRD/on/demandware.static/-/Sites-met-master/default/dwf5c519c8/images/hi-res/Master_Of_Puppets_T-Shirt_Angle.jpg?sw=650",
      title: "Metallica",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0293/3866/5039/products/image_80f91459-0d6c-4614-a8fc-58212a12db8f_800x.jpg?v=1637259366",
      title: "Slayer",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw44UMsmRadqyAGGSV-L8wmjV3NnUjODM0sQ7KDPQXWj_2Wmuimfb2wbJCY-4lD2X1y8&usqp=CAU",
      title: "Venom",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwq3BTrFzlUa_0XvMZaKDegJjA5sX4w-Sg9ENuSMzr3VMfR1xwW73dEeg5aviQKUuwKwQ&usqp=CAU",
      title: "Bathory",
    },
  ];

  const media = [
    {
      img: "https://hmrock.com.br/wp-content/uploads/2017/09/8b22cf7e65cd897f87adec36ce51fd5bokkkkk.jpeg",
      title: "Metaltex - Spikes and Leather CD",
    },
    {
      img: "https://hmrock.com.br/wp-content/uploads/2016/08/iron-maiden-somewhere-in-time-pic-disc-2-vinyl-record-clock-sleeve-80s.jpg.pagespeed.ce.fNoHxBcgeW.jpg",
      title: "Iron Maiden - Somewhere In Time CD",
    },
    {
      img: "https://hmrock.com.br/wp-content/uploads/2021/10/966798_Fotor.jpg.pagespeed.ce._Dq9FrLa26.jpg",
      title: "Running Wild – Blood on Blood CD",
    },
    {
      img: "https://hmrock.com.br/wp-content/uploads/2019/12/images-4-416x416.jpg.pagespeed.ce.SSQ1Bh7Wbf.jpg",
      title: "Celtic Frost – Monotheist CD",
    },
  ];

  return (
    <MainBox>
      {title === "camisetas" && (
        <div>
          <TopBox>
            <div>
              <Title variant="h1">{title ? title : "Produto"}</Title>
              <SubTitle variant="body1">
                O melhor em {title} de Rock e Metal
              </SubTitle>
            </div>

            <Button endIcon={<SendIcon />}>Ver tudo</Button>
          </TopBox>

          <ImageList
            sx={{ width: "100%", overflow: "hidden" }}
            cols={smDown ? 1 : lgDown ? 2 : 4}
            rowHeight={smDown ? 200 : 300}
          >
            {shirts.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}

      {title === "cds/vinis" && (
        <div>
          <TopBox>
            <div>
              <Title variant="h1">{title ? title : "Produto"}</Title>
              <SubTitle variant="body1">
                O melhor em {title} de Rock e Metal
              </SubTitle>
            </div>

            <Button endIcon={<SendIcon />}>Ver tudo</Button>
          </TopBox>

          <ImageList
            sx={{ width: "100%", overflow: "hidden" }}
            cols={smDown ? 1 : lgDown ? 2 : 4}
            rowHeight={smDown ? 200 : 300}
          >
            {media.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </MainBox>
  );
};
