import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navbar__link" to="/contacts">
          Add friends
        </Link>
      </li>
      <li>
        <Link className="navbar__link" to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <button onClick={() => auth.signOut()}>logOut</button>
      </li>
    </ul>
  );
};

export default NavBar;
