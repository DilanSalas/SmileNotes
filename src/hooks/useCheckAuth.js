import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckout = () => {

 const {status} = useSelector((state) => state.auth);
  
 const dispatch = useDispatch();  


 useEffect(() => {

  onAuthStateChanged(FirebaseAuth, async (user) => {
      if(!user) return dispatch(logout());
      const { displayName, photoURL, email, uid } = user;
      dispatch(login(user));
      dispatch(startLoadingNotes());
    });


 }, [])

 return{
    status

 }
}
