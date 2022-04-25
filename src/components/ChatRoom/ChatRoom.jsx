import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { getFriends } from "../../redux/friends/friendsSelectors";
import {
  getMessage,
  getNewJoke,
  getMSA,
} from "../../redux/message/messageSelectors";
import { addNewMessage, addNewMessA } from "../../redux/message/messageSlice";
import MessageItem from "../MessageItem/MessageItem";
import { getJoke } from "../../redux/message/messageOperation";
import { IoIosSend } from "react-icons/io";
import "./ChatRoom.scss";

const ChatRoom = () => {
  const [newMessage, setNewMessage] = useState("");
  const friends = useSelector(getFriends);
  const message = useSelector(getMessage);
  const msA = useSelector(getMSA);
  const joke = useSelector(getNewJoke);
  const dispatch = useDispatch();
  const params = useParams();
  const idForAction = Number(params.id.slice(1));

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch, message]);

  const newDate = new Date();

  const createMessage = () => ({
    id: uuidv4(),
    message: newMessage,
    received: false,
    createdAt: newDate,
  });

  const createAnswer = () => ({
    id: uuidv4(),
    message: joke,
    received: true,
    createdAt: newDate,
  });

  const addNewMessageToState = (e) => {
    e.preventDefault();
    const newMs = createMessage();
    const answer = createAnswer();
    dispatch(addNewMessage(newMs));
    setNewMessage("");
    setTimeout(dispatch(addNewMessage(answer)), 3000);
  };

  const InfUpChat = friends.filter((friend) => friend.id === idForAction);

  return (
    <div className="chatRoom">
      <div className="InfUpChat">
        <img
          src={InfUpChat[0].photoURL}
          alt="avatar"
          width="45"
          height="45"
          className="InfUpChat__img"
        />
        <p className="InfUpChat__name">{InfUpChat[0].name}</p>
      </div>
      <ul className="chat__list">
        {idForAction === 1 &&
          message.map((ms) => <MessageItem messageItem={ms} key={ms.id} />)}
        {idForAction === 2 &&
          msA.map((ms) => <MessageItem messageItem={ms} key={ms.id} />)}
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
  );
};

export default ChatRoom;
