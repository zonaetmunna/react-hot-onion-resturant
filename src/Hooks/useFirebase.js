import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({})
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInWithGoogle = () => {
          return signInWithPopup(auth, googleProvider);


     }

     useEffect(() => {
          onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
          })
     }, [])

     const logOut = () => {
          signOut(auth)
               .then(() => { })
     }

     return {
          user,
          signInWithGoogle,
          logOut
     }
}

export default useFirebase;