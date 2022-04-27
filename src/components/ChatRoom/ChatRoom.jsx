import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { getNewJoke } from "../../redux/message/messageSelectors";
import MessageItem from "../MessageItem/MessageItem";
import { getJoke } from "../../redux/message/messageOperation";
import { IoIosSend } from "react-icons/io";
import "./ChatRoom.scss";

const ChatRoom = ({ allFriends }) => {
  const [newMessage, setNewMessage] = useState("");
  const [activeFriend, setActiveFriend] = useState(null);

  const db = getFirestore();
  const joke = useSelector(getNewJoke);
  const dispatch = useDispatch();

  const params = useParams();
  const idForAction = params.id.slice(1);

  useEffect(() => {
    const friend = allFriends.filter((friend) => friend.id === idForAction);
    setActiveFriend(...friend);
  }, [allFriends, idForAction, activeFriend]);

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch, idForAction, activeFriend?.message.length]);

  const addToDb = async (newDb) => {
    await setDoc(doc(db, "friends", "list"), { ...newDb });
  };

  const newDate = new Date();

  const createMessage = () => ({
    id: uuidv4(),
    message: newMessage,
    received: false,
    createdAt: newDate.toLocaleString().toString(),
  });

  const createAnswer = () => ({
    id: uuidv4(),
    message: joke,
    received: true,
    createdAt: newDate.toLocaleString().toString(),
  });

  const addNewMessageToState = async (e) => {
    e.preventDefault();
    const newMs = createMessage();
    const answer = createAnswer();
    const newSent = {
      ...activeFriend,
      message: [...activeFriend.message, newMs, answer],
    };
    setActiveFriend(newSent);

    setNewMessage("");

    const anotherFriends = allFriends.filter(
      (friend) => friend.id !== idForAction
    );
    const newDb = [{ ...activeFriend[0], ...newSent }, ...anotherFriends];
    addToDb(newDb);
  };

  return (
    !!activeFriend && (
      <div className="chatRoom">
        <div className="InfUpChat">
          <img
            src={activeFriend.photoURL}
            alt="avatar"
            width="45"
            height="45"
            className="InfUpChat__img"
          />
          <p className="InfUpChat__name">{activeFriend.name}</p>
        </div>
        <ul className="chat__list">
          {activeFriend.message.map((ms) => (
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
            onClick={(e) => addNewMessageToState(e)}
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

ChatRoom.propTypes = {
  allFriends: PropTypes.array,
};

export default ChatRoom;
