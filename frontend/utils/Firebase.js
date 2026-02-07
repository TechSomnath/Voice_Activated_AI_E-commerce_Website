import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "voicecartai-cf62d.firebaseapp.com",
  projectId: "voicecartai-cf62d",
  storageBucket: "voicecartai-cf62d.firebasestorage.app",
  messagingSenderId: "420914921094",
  appId: "1:420914921094:web:73b267870845edcbe89b07"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export { auth , provider}