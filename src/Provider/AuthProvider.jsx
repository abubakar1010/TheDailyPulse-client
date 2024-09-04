import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../Firebase/firebase.config";
  import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";
  
  export const AuthContext = createContext();
  
  // eslint-disable-next-line react/prop-types
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()
  
    const createUser = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
    }
  
    const logout = () => {
      setIsLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser)
        setUser(currentUser);
        setIsLoading(false);
        if(currentUser){
          //set jwt in client
          const userInfo = {
            email: currentUser.email,
          }
          axiosPublic.post('/jwt', userInfo)
          .then( res => {
            if(res.data.token){
              localStorage.setItem("access-token",res.data.token)
            }
          })
        }
        else{
          //remove token from client
          localStorage.removeItem("access-token")
        }
      });
  
      return () => {
        unSubscribe();
      };
    }, [axiosPublic]);
  
    const updateUser = (name, imgURL) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: imgURL
      })
    }
  
  //   console.log(user);
  
    const userInfo = {
      user,
      isLoading,
      login,
      createUser,
      logout,
      updateUser,
      googleLogin
    };
    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  