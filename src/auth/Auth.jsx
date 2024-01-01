import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const googleAuth = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        // Clear Google authentication token
        googleAuth.signOut().then(() => {
          console.log("Google token cleared");
        });
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleAuth);
  };

 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    LoginWithEmail,
    loading,
    logInWithGoogle,
    logOutUser,
    auth
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
