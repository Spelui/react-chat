import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import EmptyPage from "../EmptyPage/EmptyPage";
import s from "./Chat.module.scss";

const Chat = ({ allFriends }) => {
  return (
    <div className={s.chat}>
      <div className={s.left__side}>
        <UserInf />
        <Contacts allFriends={allFriends} />
      </div>
      <div className={s.right__side}>
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
