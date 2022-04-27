import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import EmptyPage from "../EmptyPage/EmptyPage";
import "./Chat.scss";

const Chat = ({ allFriends }) => {
  return (
    <div className="chat">
      <div className="left-side">
        <UserInf />
        <Contacts allFriends={allFriends} />
      </div>
      <div className="right-side">
        <Routes>
          <Route path="/" element={<EmptyPage />} />
          <Route path=":id" element={<ChatRoom allFriends={allFriends} />} />
        </Routes>
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  allFriends: PropTypes.array,
};

export default Chat;
