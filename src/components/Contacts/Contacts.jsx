import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useContext } from "react";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../context/themeContext";

import ContactsItem from "./ContactsItem";

import { getFilter } from "../../redux/message/messageSelectors";
import s from "./Contacts.module.scss";

const Contacts = ({ allFriends }) => {
  const filter = useSelector(getFilter);
  const { theme } = useContext(ThemeContext);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div
      className={
        theme === themes.light
          ? `${s.contacts}`
          : `${s.contacts} ${s.darkTheme}`
      }
    >
      <div className={s.contacts__header}>
        <h2 className={s.contacts__title}>Chats</h2>
        <div className={s.themeBtn}>
          <ThemeSwitcher />
        </div>
      </div>
      <ul className={s.contacts__list}>
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
