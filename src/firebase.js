import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATq44Ua_nK6YJUWJT-oLSTVf-eg_uvVOU",
  authDomain: "easystore-b1a16.firebaseapp.com",
  projectId: "easystore-b1a16",
  storageBucket: "easystore-b1a16.appspot.com",
  messagingSenderId: "672203220519",
  appId: "1:672203220519:web:02a498c2252309c743d002",
  measurementId: "G-MSPPBH88YW",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
