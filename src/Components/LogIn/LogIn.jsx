import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.init"; 
import { useState } from "react";

const LogIn = () => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () =>{
       signInWithPopup( auth , googleProvider )
       .then( result => {
        console.log(result)
        setUser(result.user);
       })
       .catch( error => {
        console.log('SignIn Error', error)
        setUser(null);
       })
    }

    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('Sign Out Done')
            setUser(null);
        })
        .catch(error => {
            console.log('SignOut Error', error);
        })
    }

    return (
        <div>
            {
                user 
                    ? 
                    <button onClick={handleGoogleSignOut} >Sign Out</button>
                        :
                    <button style={{'marginRight' : '20px'}} onClick={handleGoogleSignIn} >LogIn With Google</button>
            }
            
            
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p> Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default LogIn;