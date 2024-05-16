import React, { useState } from 'react'
// import Login from '../Login/Login'
import "./register.css"
import Add from "../../img/add.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage }from '../../firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { async } from '@firebase/util';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from 'react-router-dom';


const Register = () => {


  const [err, setErr] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
      e.preventDefault()
      const displayName = e.target[0].value
      const email = e.target[1].value
      const password = e.target[2].value
      const file = e.target[3].files[0]


try {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on( (error) => {
  // Handle unsuccessful uploads
  setErr(true)
}, 

  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      // console.log('File available at', downloadURL);
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      })
      await setDoc(doc(db ,"Users" ,res.user.uid),{
          uid: res.user.uid,
          displayName,
          email, 
          photoURL : downloadURL
      })
      await setDoc(doc(db ,"usersChats" ,res.user.uid),{})
        navigate("/")
      
    });
  }
);
} catch (error) {
 console.log(error);
}
}


  return (
    <div className='formContainer'>
        <div className="formWrapper">
          <div className="logo">Chat</div>
          <div className="tittle">Register</div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input type="file" id='file' style={{display:"none"}}/>
            <label htmlFor="file">
              <img src={Add} alt="" />
              <p style={{fontSize:"22px"}}>add</p>
            </label>
            <button>Sign Up</button>
            {err &&<span> a7a </span>}
          </form>
          <p>You do have account?  <Link to="/login">Login</Link>  </p>
        </div>
    </div>
  )
}

export default Register