import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth"
import { useEffect } from "react";
import { useState } from "react";
import initializeApplication from "../Firebase/fireebase.init";
initializeApplication()
const useFirebase=()=> {
    const [user,setUser]=useState()
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();
 const [isLoading,setIsLoading]=useState(true)
    const signInUsingGoogle=()=>{
        setIsLoading(true)
      return signInWithPopup(auth,googleProvider)
      .finally(()=>{
          setIsLoading(false)
      })
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
            setIsLoading(false)
        })
        return()=> unsubscribe
    },[])

    //Log out

    const LogOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(result=>{
            setUser({})
        })
        .finally(()=> setIsLoading(false))
    }
return{
    signInUsingGoogle,
    user,
    LogOut,
    isLoading
}

}
export default useFirebase