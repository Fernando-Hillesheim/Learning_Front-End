import { SENDER_IMAGES } from "../../constants/imageConfig";
import "./ChatMessage.scss"

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "robot" ? "sender-robot" : "sender-user"}>
      {sender === "robot" && <img src={SENDER_IMAGES.ROBOT} />}
      <p>{message}</p>
      {sender === "user" && <img src={SENDER_IMAGES.USER} />}
    </div>
  );
}
