import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

import {getFirestore,collection}  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCyDQ-K9m2BOnAR0MdKFxUjUPC9xWf49a0",
  authDomain: "socialmedia-clone-c4c27.firebaseapp.com",
  projectId: "socialmedia-clone-c4c27",
  storageBucket: "socialmedia-clone-c4c27.appspot.com",
  messagingSenderId: "739953232372",
  appId: "1:739953232372:web:7be64cd7fd9c17019b51a1",
  measurementId: "G-C3X7S90HB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//then for authentication
const auth = getAuth(app)
const provider =  new GoogleAuthProvider()

export const SignInUser = () =>{
   return signInWithPopup(auth,provider)
}


//initialize the firestore
export const db = getFirestore()

//set collectiion reference  //it accepts two paramters the database and the collection name
export const collectionReference = collection(db,"UsersPost")

//get the collection of datas //to access the data inside the document you need to use the data() function

  // getDocs(collectionReference).then((doc)=>{
  //       doc.docs.map((item)=>{
  //          console.log(item.data())
  //       })
  // })