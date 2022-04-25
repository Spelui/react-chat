import "./Enter.scss";

import { auth, fireStore, googleProvider } from "../../firebase";

const Enter = () => {
  const singInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      await fireStore.collection("user").doc(auth.currentUser.uid).set({
        //we will not be saving email in our database
        name: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="enter">
      <button className="enter__btn" onClick={singInWithGoogle}>
        sing IN with google
      </button>
    </div>
  );
};

export default Enter;
