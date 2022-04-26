import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { getApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./Main.scss";
import EmptyPage from "../EmptyPage/EmptyPage";

const Main = () => {
  const [allFriends, setAllFriends] = useState([]);
  const firebaseApp = getApp();

  const [value] = useDocumentData(
    doc(getFirestore(firebaseApp), "friends", "list"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (value !== undefined) {
      const arr = [Object.values(value)];
      setAllFriends(...arr);
    }
  }, [value]);

  return (
    <main>
      <section>
        <div className="chat">
          <div className="left-side">
            <UserInf />
            <Contacts allFriends={allFriends} />
          </div>
          <div className="right-side">
            <Routes>
              <Route path="/" element={<EmptyPage />} />
              <Route
                path=":id"
                element={<ChatRoom allFriends={allFriends} />}
              />
            </Routes>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
