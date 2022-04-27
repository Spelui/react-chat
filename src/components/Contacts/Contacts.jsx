import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import ContactsItem from "./ContactsItem";

import { getFilter } from "../../redux/message/messageSelectors";
import "./Contacts.scss";

const Contacts = ({ allFriends }) => {
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div className="contacts">
      <h2 className="contacts__title">Chats</h2>
      <ul className="contacts__list">
        {allFriends !== undefined &&
          filteredContacts().map((friend) => (
            <ContactsItem key={friend.id} friend={friend} />
          ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  allFriends: PropTypes.array,
};

export default Contacts;
