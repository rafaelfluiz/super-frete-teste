import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQAamgestCp-FoQau6Ohq4EizhDKkE-D4",
  authDomain: "super-frete-teste-7c0f2.firebaseapp.com",
  projectId: "super-frete-teste-7c0f2",
  storageBucket: "super-frete-teste-7c0f2.appspot.com",
  messagingSenderId: "686459633265",
  appId: "1:686459633265:web:098210c37f659bc46925d0"
};

const db = initializeApp(firebaseConfig);

export { db };