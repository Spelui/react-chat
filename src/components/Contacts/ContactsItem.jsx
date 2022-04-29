import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import s from "./Contacts.module.scss";

const ContactsItem = ({ friend }) => {
  const lastMs = friend.message[friend.message.length - 1];
  const isMobile = useMediaQuery({ minWidth: 250, maxWidth: 480 });
  const isTab = useMediaQuery({ minWidth: 481, maxWidth: 1200 });
  const location = useLocation();
  const idForAction = location.pathname.slice(2);

  const showLastMs = () => {
    if (isMobile) {
      return lastMs.message.slice(0, 17) + "...";
    }
    if (isTab) {
      return lastMs.message.slice(0, 15) + "...";
    }
    if (lastMs.message.length > 20) {
      return lastMs.message.slice(0, 20) + "...";
    }
    return lastMs.message;
  };

  return (
    <li
      key={friend.id}
      className={
        idForAction === friend.id
          ? `${s.contacts__item} ${s.active}`
          : s.contacts__item
      }
    >
      <NavLink to={":" + friend.id} className={s.contacts__link}>
        <div className={s.contacts__account}>
          <img
            className={s.contacts__img}
            src={friend.photoURL}
            alt="friend"
            width="45"
            height="45"
          />
          <div className={s.contacts__inf}>
            <p className={s.contacts__name}>{friend.name}</p>
            <span className={s.contacts__message}>{showLastMs()}</span>
          </div>
        </div>
        <p className={s.contacts__data}>{lastMs.createdAt}</p>
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
