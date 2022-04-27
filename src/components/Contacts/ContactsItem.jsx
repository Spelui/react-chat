import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./Contacts.scss";

const ContactsItem = ({ friend }) => {
  const lastMs = friend.message[friend.message.length - 1];

  const showLastMs = () => {
    if (lastMs.message.length > 20) {
      return lastMs.message.slice(0, 20) + "...";
    }
    return lastMs.message;
  };

  return (
    <li key={friend.id} className="contacts__item">
      <NavLink to={":" + friend.id} className="contacts__link">
        <div className="contacts__account">
          <img
            className="contacts__img"
            src={friend.photoURL}
            alt="friend"
            width="45"
            height="45"
          />
          <div className="contacts__inf">
            <p className="contacts__name">{friend.name}</p>
            <span className="contacts__message">{showLastMs()}</span>
          </div>
        </div>
        <p>{lastMs.createdAt}</p>
      </NavLink>
    </li>
  );
};

ContactsItem.propTypes = {
  allFriends: PropTypes.shape({
    id: PropTypes.string,
    isActive: PropTypes.bool,
    message: PropTypes.array,
    name: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

export default ContactsItem;
