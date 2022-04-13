import {initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getAuth,  GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBxD0fH2I31epXNulP9Dqi68SGdwDEGZno",
    authDomain: "disney-clone-25e75.firebaseapp.com",
    projectId: "disney-clone-25e75",
    storageBucket: "disney-clone-25e75.appspot.com",
    messagingSenderId: "63124484802",
    appId: "1:63124484802:web:d40b67d942489e27ce415b",
    measurementId: "G-7XCYLQQ9EX"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export {db, storage, auth, provider, GoogleAuthProvider };

provider.setCustomParameters({ prompt: 'select_account' });


// export default db;



