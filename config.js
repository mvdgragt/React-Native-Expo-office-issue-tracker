// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, orderBy
} from 'firebase/firestore';
// import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAucJQRFAOgoceiGg-D83CIG73XvQWEVEI",
  authDomain: "knowit-todo.firebaseapp.com",
  projectId: "knowit-todo",
  storageBucket: "knowit-todo.appspot.com",
  messagingSenderId: "134825395613",
  appId: "1:134825395613:web:d58d911a4b11c471681b74"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);
// const storage = getStorage();
// const storageRef = ref(storage);

// const imageRef = ref(storage, 'images');
// const sparkyRef = ref(storage, 'images/sparky.jpg');

// collection ref
export const colRef = collection(db, 'todos')

// queries
// const q = query(colRef, orderBy('', 'createdAt'))

