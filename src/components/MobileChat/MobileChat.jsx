import { Routes, Route } from "react-router-dom";

import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import s from "./MobileChat.module.scss";

export const MobileChat = ({ allFriends }) => {
  return (
    <div className={s.mobile}>
      <Routes>
        <Route
          path="/"
          element={
            <div className={s.mobile__account}>
              <UserInf />
              <Contacts allFriends={allFriends} />
            </div>
          }
        />
        <Route
          path="/:id"
          element={
            <div className={s.mobile__chat}>
              <ChatRoom allFriends={allFriends} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
