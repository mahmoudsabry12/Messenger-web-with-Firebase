import React, { useState } from 'react'
import Register from '../Register/Register'
import "./login.css"
import { useNavigate ,Link} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const Login = () => {

  
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault()

      const email = e.target[0].value
      const password = e.target[1].value



try {
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
} catch (error) {
 console.log(error);
}
}

  return (
    <div className='login'>
        <div className="loginContainer">
          <div className="loginTittle">
              <div className="mtittle"> SABRY </div>
              <div className="tittle">login</div>
            </div>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password'/>
            <button  >Sign in</button>
            {err &&<span> a7a </span>}
            <div className="ss">
                <span>You don't have account </span>
                <p> <Link to="/register">Register</Link></p>  
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login