import CommentIcon from "@mui/icons-material/Comment";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { ChatFlow } from "./components/ChatFlow/ChatFlow";
import { FirstChat } from "./components/FirstChat/FirstChat";
import { ChatBox, PositionBox } from "./styles";

export function Bot() {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  const [openBot, setOpenBot] = useState(false);
  const [firstMessage, setFirstMessage] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [senderName, setSanderName] = useState(false);

  const handleClick = () => {
    if (!hasName) {
      setFirstMessage(true);
    } else {
      setOpenBot(!openBot);
    }
  };

  const handleStartChat = (name) => {
    if (name) {
      setHasName(true);
      setFirstMessage(false);
      setOpenBot(true);
      setSanderName(name);
      return;
    } else {
      return setFirstMessage(true);
    }
  };

  return (
    <>
      <ChatBox>
        <CommentIcon
          cursor="pointer"
          fontSize="large"
          sx={{
            backgroundColor: "#121212",
            padding: "20px",
            borderRadius: "40px",
            color: "#D6D6D6",
          }}
          onClick={() => handleClick()}
        />
      </ChatBox>

      <FirstChat
        isFirstMessage={firstMessage}
        handleStartChat={handleStartChat}
      />

      <ChatFlow
        senderName={senderName}
        openBot={openBot}
        setOpenBot={setOpenBot}
      />
    </>
  );
}
