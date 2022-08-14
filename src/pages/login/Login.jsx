import { useState } from "react"
import "./login.scss";
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false);
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredencial) => {
      const user = userCredencial.user;
      dispatch({type:'LOGIN', payload: user})
      navigate('/');
    })
    .catch((error) => {
      setError(true)
    })
  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button> 
       {error && <span>Wrong email or Password!</span>}
      </form>
    </div>
  )
}

export default Login