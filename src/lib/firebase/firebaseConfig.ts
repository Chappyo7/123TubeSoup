import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6GXZRppkW3tg88McXSdxPkGIJLWrrRaQ",
  authDomain: "transcript-friend-23df1.firebaseapp.com",
  databaseURL: "https://transcript-friend-23df1-default-rtdb.firebaseio.com",
  projectId: "transcript-friend-23df1",
  storageBucket: "transcript-friend-23df1.firebasestorage.app",
  messagingSenderId: "171428330007",
  appId: "1:171428330007:web:e631690e06f5fe97c3fa52",
  measurementId: "G-9GECTK5ZJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };