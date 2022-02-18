import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { SignInUser } from "../Firebase/FirebaseConfig";
import { UserReducer } from "../Reducer/UserReducer";
import { PostDataReducer } from "../Reducer/PostDataReducer";
import { getDocs,addDoc, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db,collectionReference } from "../Firebase/FirebaseConfig";
import { DockSharp } from "@mui/icons-material";
import { getAccordionDetailsUtilityClass } from "@mui/material";

const GlobalState = createContext()



//create a function provider
export const StateProvider = ({children}) =>{

        const [{user},dispatch] = useReducer(UserReducer,{
            user:null
        })


        const [{postData},postDispatch] = useReducer(PostDataReducer,{
            postData:null
        })

        //this is for the fign in with google Auth
        const SignIn = () =>{
              
                SignInUser().then((response)=>{
               
                 dispatch({
                     type:"SET_USER",
                     payload:response
                 })
             })
        }


        //this is for the log out
            const logOut = ()=> {
                dispatch({
                    type:"LOG_OUT"
                })
            }

        //get the document data 
        const getData = () =>{

            onSnapshot(collectionReference,(snapshot)=>{
                const snap =  snapshot.docs.map((doc)=>{
                        return {...doc.data(),id:doc.id}
                    })

                        postDispatch({
                        type:"SET_POSTDATA",
                        payload:snap
                    })

            })
            
            }

        useEffect(()=>{

                getData();
        },[])

        //add data to firebase and updates the state
        const addData = async(post) =>{

                const data = await addDoc(collectionReference,{
                    ...post
                })
        }

        //delete the data
        const deleteData = async(id) =>{
              
             const data =  doc(collectionReference,id)
             await deleteDoc(data)
             console.log('succesfully deleted')

        }

      

        //darkmode
        const[darkmode,setDarkmode]= useState(false);

        const toggleDarkMode = () =>{
            setDarkmode(!darkmode)
        }

        //addComment
        const [comments,SetComments] = useState([])
        const addComment = async(id,value) =>{

        
                 const specificDoc = doc(collectionReference,id)
                 await  setDoc(specificDoc,{comment:[...comments,value]},{merge:true}) 
           
                 SetComments([...comments,value])

        }

        //like
        const likePost = (id) =>{
                postDispatch({
                    type:"LIKE_POST",
                    payload:id
                })
            }


        console.log(postData)


        return <GlobalState.Provider value={{user,SignIn,logOut,getData,postData,addData,deleteData,darkmode,toggleDarkMode,addComment,likePost}}>
                     {children}
             </GlobalState.Provider>

}


//create a reusable function that return using our context
export const UseProvider = () =>{
    return useContext(GlobalState)

}