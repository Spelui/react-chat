import { Routes, Route } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <section>
        <div className="chat">
          <div className="left-side">
            <UserInf />
            <Contacts />
          </div>
          <div className="right-side">
            <Routes>
              <Route path=":id" element={<ChatRoom />} />
            </Routes>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
