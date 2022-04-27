import { Routes, Route } from "react-router-dom";

import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./MobileChat.scss";

export const MobileChat = ({ allFriends }) => {
  return (
    <div className="mobile">
      <Routes>
        <Route
          path="/"
          element={
            <div className="mobile__account">
              <UserInf />
              <Contacts allFriends={allFriends} />
            </div>
          }
        />
        <Route
          path="/:id"
          element={
            <div className="mobile__chat">
              <ChatRoom allFriends={allFriends} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
