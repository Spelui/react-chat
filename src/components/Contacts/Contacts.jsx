import { useSelector } from "react-redux";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { getFriends, getFilter } from "../../redux/friends/friendsSelectors";
import {
  getMessage,
  getAllMessage,
} from "../../redux/message/messageSelectors";
import ukr from "../../images/ukrainian.png";
import "./Contacts.scss";

const Contacts = () => {
  const friends = useSelector(getFriends);
  const filter = useSelector(getFilter);
  const message = useSelector(getMessage);

  const lastMs = message[message.length - 1];

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return friends.filter((friend) =>
      friend.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const showLastMs = () => {
    if (lastMs.message.length > 20) {
      return lastMs.message.slice(0, 20) + "...";
    }
    return lastMs.message;
  };

  return (
    <div className="contacts">
      <h2 className="contacts__title">Chats</h2>
      <ul className="contacts__list">
        {filteredContacts().map((friend) => (
          <li key={friend.id} className="contacts__item">
            <NavLink to={":" + friend.id} className="contacts__link">
              <div className="contacts__account">
                <img
                  className="contacts__img"
                  src={ukr}
                  alt="friend"
                  width="45"
                  height="45"
                />
                <div className="contacts__inf">
                  <p className="contacts__name">{friend.name}</p>
                  <span className="contacts__message">{showLastMs()}</span>
                </div>
              </div>
              <p>{lastMs.createdAt.toDateString()}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
