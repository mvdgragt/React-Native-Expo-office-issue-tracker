// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs 
} from 'firebase/firestore';


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyAucJQRFAOgoceiGg-D83CIG73XvQWEVEI",
  authDomain: "knowit-todo.firebaseapp.com",
  projectId: "knowit-todo",
  storageBucket: "knowit-todo.appspot.com",
  messagingSenderId: "134825395613",
  appId: "1:134825395613:web:d58d911a4b11c471681b74"
});

// init firebase app
initializeApp(firebaseApp)

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'todos')

// get collection data
getDocs(colRef)
.then((snapshot) => {
  let todos = [];
  snapshot.docs.forEach((doc) => {
    todos.push({...doc.data(), id: doc.id })
  })
alert(todos)  
})