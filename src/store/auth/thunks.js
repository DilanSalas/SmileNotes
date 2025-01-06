import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";


export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};



export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

   const result = singInWithGoogle();

    if(!result.ok) return dispatch(logout(result.errorMessage));
    
    dispatch(login( result ));
   
  };




  };


  export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

         const {ok, uis, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });
         
         if(!ok) return dispatch(logout({errorMessage}));

         dispatch(login( {uis,displayName,photoURL,email} ));

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const {ok, displayName, photoURL, errorMessage} = await loginWithEmailPassword({ email, password });
        if(!ok) return dispatch(logout({errorMessage}));
        dispatch(login( {displayName,photoURL,email} ));
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
      
        await logoutFirebase();
        dispatch( clearNotesLogout() );

        dispatch(logout({}));
      
    }
}



