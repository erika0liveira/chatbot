import { Avatar, Box, Paper, Typography } from "@mui/material";
import BotLogo from "../../assets/bot-logo.png";
import { Baloon, MessageBox } from "./styles";

export const BotMessage = (name, message) => {
  if (name === "Waures") {
    return (
      <MessageBox sx={{ gridTemplateColumns: "1fr 3fr" }}>
        <Box
          component={Paper}
          style={{
            background: "start",
            backgroundImage: `url(${BotLogo})`,
            backgroundSize: "40px 40px",
            backgroundRepeat: "no-repeat",
            boxShadow: "none",
          }}
        />

        <Baloon>
          <Typography
            sx={{ width: "100%", fontWeight: "bold", fontSize: ".75rem" }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>{message}</Typography>
        </Baloon>
      </MessageBox>
    );
  } else {
    return (
      <MessageBox sx={{ gridTemplateColumns: "3fr 1fr", alignItems: "center" }}>
        <Baloon>
          <Typography
            sx={{ width: "100%", fontWeight: "bold", fontSize: ".75rem" }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>{message}</Typography>
        </Baloon>

        <Avatar
          style={{
            textTransform: "uppercase",
            color: "#000",
            placeSelf: "start",
          }}
        >
          {name[0]}
        </Avatar>
      </MessageBox>
    );
  }
};
