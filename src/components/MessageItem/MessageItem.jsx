import "./MessageItem.scss";

const MessageItem = ({ messageItem }) => {
  const { id, message, received, createdAt } = messageItem;

  return (
    <li key={id} className="message">
      <div className={received === false ? "MessageSent" : "MessageReceived"}>
        <p className="Message">{message}</p>
      </div>
      <span className={received === false ? "timeSent" : "timeReceived"}>
        {createdAt}
      </span>
    </li>
  );
};

export default MessageItem;
