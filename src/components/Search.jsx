import React, { useContext, useState } from 'react'
import { collection, query, where,getDocs, setDoc, serverTimestamp, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"
import { async } from '@firebase/util';
import { AuthContext } from '../Context/AuthContext'

const Search = () => {

  const [username,setUsername] = useState("")
  const [user,setUser] = useState("")
  const [err,setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () =>{
    const q = query (collection(db, "Users"),
    where("displayName", "==", username) )
try{
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setUser(doc.data())
    console.log(doc.data())
});
}catch(err){
  setErr(true)
  console.log(err)
}
}
 
  const handleKey = (e) =>{
      e.code === "Enter" && handleSearch()
  }

  const handleSelect = async ()=>{
      const combinedId =
       currentUser.uid >user.uid
       ? currentUser.uid + user.uid
       : user.uid + currentUser.uid 
       try{
         const res= await getDoc(doc(db,"chats",combinedId))
         if(!res.exists()){

            await setDoc(doc(db,"chats",combinedId),{messages:[]})


        

        await updateDoc(doc(db, "usersChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usersChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
            
         }

       }catch (err){}
       setUser(null);
          setUsername("")


  }

  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Search'
           onKeyDown={handleKey} 
           onChange={(e)=> setUsername(
            e.target.value)}
              value={username}
            />

            {err && <span>user not found </span>}
          {user && <div className="userChat" onChange={handleSelect}>
            <img src={user.photoURL} alt="" />           
            <div className="userInfo">
              <span>{user.displayName}</span>
            </div>
          </div>} 
        </div>
    </div>
  )
}

export default Search