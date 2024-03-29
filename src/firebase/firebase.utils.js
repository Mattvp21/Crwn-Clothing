import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2dT1T9GcDsxp5ju_oFOeIko_my7QEV_o",
    authDomain: "crwn-clothing-b63e7.firebaseapp.com",
    projectId: "crwn-clothing-b63e7",
    storageBucket: "crwn-clothing-b63e7.appspot.com",
    messagingSenderId: "307080648303",
    appId: "1:307080648303:web:27862820cf421ad11a5f9a",
    measurementId: "G-8P0WG05K77"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get;

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

    
  };

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;