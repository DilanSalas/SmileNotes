import { updateProfile,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { FirebaseAuth } from "./config.js";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user; 

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message, 
        };
    }
};



export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
       
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        

        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
    } catch (error) {
        
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};




export const loginWithEmailPassword = async ({ email, password }) => {

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { displayName, photoURL, uid } = result.user; 

        return {
            ok: true,
            displayName,
            photoURL,
            uid,
        };

        console.log(result);
    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message,
                                      
        }
    }
};



export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
