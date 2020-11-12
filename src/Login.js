import React, {useState, useEffect} from 'react'
import {auth} from './firebase'

function Login() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');

    const signOut = (event) => {
        event.preventDefault();
        auth.signOut();
      }

    const signUp = (event) => {
        event.preventDefault();
        console.log(email, password)
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
          return authUser.user.updateProfile(
            { displayName : 'jing zhang' }
          )
        })
        .catch((error)=> alert(error.message))
      }

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .catch(error =>alert(error.message))
      }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
          if(authUser){
            // user has logged in...
            setUser(authUser);
            if(authUser.fullname){
              //do not update uesrnmae
            }else{
              return authUser.updateProfile({
                displayName : fullname
              });
            }
          } else {
            // user has logged out...
            setUser(null);
          }
        })
    
        return ()=>{
          // perfor a clean up
          unsubscribe();
        }
      },[user])

    return (
        <div>
            {JSON.stringify(user)}
            <form>
            <input placeholder='Email'
                    onChange={(e)=> setEmail(e.target.value)}
                    ></input>

            <input placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                    ></input>

            <input placeholder='Full Name'
                    onChange={(e)=> setFullname(e.target.value)} 
                    ></input>

            <button type='button'  onClick={signUp}>SignUp</button>
            
            <button type='button'  onClick = {signIn}>Sign In</button>

            <button type='button'  onClick = {signOut}>Sign Out</button>
            </form>
        </div>
    )
}

export default Login
