import { useEffect, useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { getApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";
import { useMediaQuery } from "react-responsive";
import Chat from "../Chat/Chat";
import { MobileChat } from "../MobileChat/MobileChat";

const Main = () => {
  const [allFriends, setAllFriends] = useState([]);
  const firebaseApp = getApp();
  const isMobile = useMediaQuery({ minWidth: 200, maxWidth: 767 });

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
        {isMobile ? (
          <MobileChat allFriends={allFriends} />
        ) : (
          <Chat allFriends={allFriends} />
        )}
      </section>
    </main>
  );
};

export default Main;
