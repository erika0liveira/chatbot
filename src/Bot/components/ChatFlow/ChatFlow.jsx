import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
  Grow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BotBox, BotHeader, MiddleMessageBox } from "./styles";

import { useEffect, useState } from "react";
import { BotMessage } from "./get-message";
import { getAnswer } from "../../../service/service";

export const ChatFlow = ({ senderName, openBot, setOpenBot }) => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [callUseEffect, setCallUseEffect] = useState(false);
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [botAnswers, setBotAnswers] = useState([]);

  const handleConfirm = (message) => {
    setMessage(message);
    setCallUseEffect(true);
  };

  useEffect(() => {
    if (callUseEffect) {
      const settingMessage = () => {
        setUserMessages((previousMessage) => [
          ...previousMessage,
          { name: senderName, message: message },
        ]);

        const answer = getAnswer(JSON.stringify({ text: message })).then(
          (answer) => {
            console.log(answer);
          }
        );

        setMessage("");
        setCallUseEffect(false);
      };

      settingMessage();
    }
  }, [callUseEffect]);

  const handleInputChange = (e) => {
    if (e) {
      setMessage(e.target.value);
    }
  };

  return (
    <Grow
      direction="down"
      in={openBot}
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

        <MiddleMessageBox>
          <div style={{ width: "400px", height: "450px", overflowY: "auto" }}>
            {BotMessage("Waures", `Olá ${senderName}! No que posso te ajudar?`)}
            {/*userMessages?.map((m) =>
              m.message ? BotMessage(m.name, m.message) : ""
          )*/}
            {BotMessage("Thiago Traue", `Olá Bot`)}
            {BotMessage("Waures", `No que posso te ajudar?`)}
            {BotMessage(
              "Thiago Traue",
              `Gostaria de ver o prazo de entrega do pedido 123456`
            )}
            {BotMessage("Waures", `O prazo de entrega é de 2 dias úteis`)}
            {BotMessage("Thiago Traue", `Legal`)}
            {BotMessage("Waures", `Posso te ajudar em mais alguma coisa?`)}
            {BotMessage("Thiago Traue", `jhasdbiasnhdiashduiahsdsa`)}
            {BotMessage("Waures", `Desculpa, não entendi`)}
            {BotMessage("Thiago Traue", `Encerrar`)}
            {BotMessage("Waures", `Até logo. Se precisar de ajuda, é só enviar uma nova mensagem`)}
          </div>

          <div style={{ width: "90%" }}>
            <TextField
              id="filled-basic"
              label="Sua mensagem..."
              variant="filled"
              value={message}
              fullWidth
              InputProps={{
                endAdornment: <SendIcon cursor="pointer" />,
              }}
              onChange={handleInputChange}
              onClick={() => handleConfirm(message)}
            />
          </div>
        </MiddleMessageBox>
      </BotBox>
    </Grow>
  );
};
