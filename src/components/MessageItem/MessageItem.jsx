import PropTypes from "prop-types";

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

MessageItem.propTypes = {
  messageItem: PropTypes.shape({
    createdAt: PropTypes.string,
    id: PropTypes.string,
    message: PropTypes.string,
    received: PropTypes.bool,
  }),
};

export default MessageItem;
