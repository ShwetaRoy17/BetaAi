
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCZuQ5X8xn06shRJrrYtWKnGTH5pqExgY8",
    authDomain: "betai-95da2.firebaseapp.com",
    projectId: "betai-95da2",
    storageBucket: "betai-95da2.appspot.com",
    messagingSenderId: "438938473460",
    appId: "1:438938473460:web:153a179b65139b462e1fa1",
    measurementId: "G-J1HHF3YNQH"
  };

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 export const auth = getAuth(app);