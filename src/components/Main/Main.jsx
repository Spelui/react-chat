import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";
import UserInf from "../UserInf/UserInf";
import ChatRoom from "../ChatRoom/ChatRoom";
import "./Main.scss";
import { getFirestore, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { getApp } from "firebase/app";

const Main = () => {
  const firebaseApp = getApp();

  const [allFriends, setAllFriends] = useState([{}]);

  const [value] = useDocumentData(doc(getFirestore(firebaseApp), "friends"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  console.log("~ value", value);

  // useEffect(() => {
  //   if (value !== undefined) {
  //     setAllFriends([...value.friends]);
  //   }
  // }, [value]);
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
              <Route path="/" element="Choice a chat" />
              <Route
                path=":id"
                element={
                  <ChatRoom
                    allFriends={allFriends}
                    setAllFriends={setAllFriends}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
