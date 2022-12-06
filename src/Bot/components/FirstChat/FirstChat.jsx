import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Grow,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import BotLogo from "../../assets/bot-logo.png";
import {
  BotBox,
  BotHeader,
  MiddleBox,
  NameBox,
  PresentationBot,
} from "./styles";

export const FirstChat = ({ handleStartChat, isFirstMessage }) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [openBot, setOpenBot] = useState(false);

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Grow
      direction="down"
      in={isFirstMessage}
      style={{ transformOrigin: "0 0 0" }}
      {...(openBot ? { timeout: 1000 } : {})}
    >
      <BotBox sx={{ width: mdDown ? "100%" : "450px" }}>
        <BotHeader>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <CloseIcon
              fontSize="xsmall"
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenBot(!openBot)}
            />
            <AspectRatioIcon fontSize="xsmall" />
          </div>

          <div>
            <Typography fontSize="small">
              Powered by: <strong>AISEC</strong>
            </Typography>
          </div>
        </BotHeader>

        <PresentationBot>
          <div
            style={{ display: "flex", flexWrap: "wrap", alignSelf: "center" }}
          >
            <Typography
              variant="primary"
              sx={{ width: "100%", fontSize: "14px" }}
            >
              Olá, eu sou o <strong>Waures</strong>. Estou aqui para te ajudar!
              Para iniciarmos, por favor, me informe seu nome.
            </Typography>
          </div>

          <Box
            component={Paper}
            style={{
              background: "center",
              backgroundImage: `url(${BotLogo})`,
              backgroundSize: "65px 65px",
              backgroundRepeat: "no-repeat",
              boxShadow: "none",
            }}
          />
        </PresentationBot>

        <MiddleBox>
          <NameBox>
            <TextField
              fullWidth
              variant="standard"
              label="Seu nome..."
              value={name}
              onChange={handleInputChange}
            />
            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              fullWidth
              onClick={() => handleStartChat(name)}
            >
              Iniciar o chat
            </Button>
          </NameBox>

          <div
            style={{ display: "flex", width: "100%", placeContent: "center" }}
          >
            <Typography variant="body2" sx={{ fontSize: "10px" }}>
              Ao conversar com o Bot, você aceita nossos termos de serviço e
              privacidade.
            </Typography>
          </div>
        </MiddleBox>
      </BotBox>
    </Grow>
  );
};
