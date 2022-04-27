import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Filter from "../Filter/Filter";
import { FiLogOut } from "react-icons/fi";
import "./UserInf.scss";

const UserInf = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="userInf">
      <div className="userInf__account">
        <div className="userInf__inf">
          <img
            className="userInf__photo"
            src={user.photoURL}
            alt="avatar"
            width="50"
            height="50"
          />

          <p className="userInf__name">{user.displayName}</p>
        </div>

        <button className="userInf__btn" onClick={() => auth.signOut()}>
          <FiLogOut />
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default UserInf;
