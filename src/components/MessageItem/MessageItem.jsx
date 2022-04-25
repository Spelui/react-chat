import "./MessageItem.scss";

const MessageItem = ({ messageItem }) => {
  const { id, message, received, createdAt } = messageItem;
  // const time =
  //     typeof createdAt === "number" ? new Date(createdAt) : createdAt.toDate();

  return (
    <li key={id} className="message">
      <div className={received === false ? "MessageSent" : "MessageReceived"}>
        <p className="Message">{message}</p>
      </div>
      <span className={received === false ? "timeSent" : "timeReceived"}>
        {createdAt.toLocaleString()}
      </span>
    </li>
  );
};

export default MessageItem;
