import React from 'react';

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import {signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
const SignIn=() =>{

    const logGoogleUser=async () => {
        const {user}= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
        // console.log(response);
    }
    const logGoogleRedirectUser=async () => {
        const {user}= await signInWithGoogleRedirect();
        // const userDocRef= await createUserDocumentFromAuth(user);
        console.log({user});
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser} >
                sign in with Google Popup
            </button>
            <button onClick={logGoogleRedirectUser} >
                sign in with Google Redirect
            </button>
        </div>
    )
}

export default SignIn;