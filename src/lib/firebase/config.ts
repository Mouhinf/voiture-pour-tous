
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdW-Fvux5eiadd9tTYETN7qExlWh-2E_g",
  authDomain: "voiture-pour-tous-app.firebaseapp.com",
  projectId: "voiture-pour-tous-app",
  storageBucket: "voiture-pour-tous-app.appspot.com",
  messagingSenderId: "937562672113",
  appId: "1:937562672113:web:4d479398acab311e77d250"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };
