import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3HZnpinGFFjuNk1ez-RlTA7U4Yn5LWDU",
  authDomain: "ascent-310ae.firebaseapp.com",
  projectId: "ascent-310ae",
  storageBucket: "ascent-310ae.appspot.com",
  messagingSenderId: "58253834070",
  appId: "1:58253834070:web:0c66225d0c3b82824488f7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
