import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth"
import { useEffect } from "react";
import { useState } from "react";
import initializeApplication from "../Firebase/fireebase.init";
initializeApplication()
const useFirebase=()=> {
    const [user,setUser]=useState()
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
      return signInWithPopup(auth,googleProvider)
      
        .catch(error =>{
            setUser(error.message)
        })
    }
    // set observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return()=> unsubscribe
    },[])

    //Log out

    const LogOut =()=>{
        signOut(auth)
        .then(result=>{
            setUser({})
        })
    }
return{
    signInUsingGoogle,
    user,
    LogOut
}

}
export default useFirebase