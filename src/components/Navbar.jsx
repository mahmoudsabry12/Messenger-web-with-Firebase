import React, { useContext } from 'react'
import "../style.css"
// import Img from "../img/add.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="logo"> SABRY </div>
      <div className="user">
        <img  src= {currentUser.photoURL} alt="" /> 
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar