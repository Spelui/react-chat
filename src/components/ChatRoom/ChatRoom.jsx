import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fireStore } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

import { getNewJoke } from "../../redux/message/messageSelectors";
import MessageItem from "../MessageItem/MessageItem";
import { getJoke } from "../../redux/message/messageOperation";
import { IoIosSend } from "react-icons/io";
import "./ChatRoom.scss";

// import { getDatabase, ref, set } from "firebase/database";

const ChatRoom = ({ allFriends }) => {
  const [newMessage, setNewMessage] = useState("");
  const [infUpChat, setInfUpChat] = useState(null);

  const joke = useSelector(getNewJoke);
  const dispatch = useDispatch();

  const params = useParams();
  const idForAction = params.id.slice(1);

  const addToCollocation = async () => {
    // const db = getDatabase();
    // await set(ref(db, "friends/FDvojx9n4UPIbQNWfaHa/friends"), [...newDb]);
    const anotherFriends = allFriends.filter(
      (friend) => friend.id !== idForAction
    );

    const newDb = [infUpChat, ...anotherFriends];
    await fireStore
      .collection("friends")
      .doc("FDvojx9n4UPIbQNWfaHa")
      .collection("friends")
      .set(newDb);
  };

  useEffect(() => {
    const friend = allFriends.filter((friend) => friend.id === idForAction);
    setInfUpChat(...friend);
  }, [allFriends, idForAction]);

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch]);

  const newDate = new Date();

  const createMessage = () => ({
    id: uuidv4(),
    message: newMessage,
    received: false,
    createdAt: newDate.toLocaleString(),
  });

  const createAnswer = () => ({
    id: uuidv4(),
    message: joke,
    received: true,
    createdAt: newDate.toLocaleString(),
  });

  const addNewMessageToState = (e) => {
    e.preventDefault();
    const newMs = createMessage();
    const newSent = {
      ...infUpChat,
      message: [...infUpChat.message, newMs],
    };
    setInfUpChat(newSent);

    setNewMessage("");

    addToCollocation();

    // setTimeout(() => {
    //   const answer = createAnswer();
    //   const newReceived = {
    //     ...infUpChat,
    //     message: [...infUpChat.message, answer],
    //   };
    //   setInfUpChat(newReceived);
    // }, 5000);

    // const newMs = createMessage();
    // const answer = createAnswer();
    // dispatch(addNewMessage(newMs));
    // setNewMessage("");
    // setTimeout(() => dispatch(addNewMessage(answer)), 10000);
  };

  return (
    !!infUpChat && (
      <div className="chatRoom">
        <div className="InfUpChat">
          <img
            src={infUpChat.photoURL}
            alt="avatar"
            width="45"
            height="45"
            className="InfUpChat__img"
          />
          <p className="InfUpChat__name">{infUpChat.name}</p>
        </div>
        <ul className="chat__list">
          {infUpChat.message.map((ms) => (
            <MessageItem messageItem={ms} key={ms.id} />
          ))}
        </ul>
        <div className="chat__send">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat__input"
          />
          <button
            onClick={addNewMessageToState}
            disabled={newMessage.length < 1}
            className="chat__btn"
          >
            <IoIosSend size={30} />
          </button>
        </div>
      </div>
    )
  );
};

export default ChatRoom;
