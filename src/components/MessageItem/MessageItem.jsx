import PropTypes from "prop-types";

import s from "./MessageItem.module.scss";

const MessageItem = ({ messageItem }) => {
  const { id, message, received, createdAt } = messageItem;

  return (
    <li key={id} className={s.message}>
      <div className={received === false ? s.MessageSent : s.MessageReceived}>
        <p className={s.Message}>{message}</p>
      </div>
      <span className={received === false ? s.timeSent : s.timeReceived}>
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
