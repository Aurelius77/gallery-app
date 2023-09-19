import {React, useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import '../styles/index.css'
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'


function Auth(){
  const[errorMsg, setErrorMsg] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

   async function onSubmit(e) {
      e.preventDefault()
      console.log('loading...')
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log('sucessful')
            navigate('/gallery')
            // ...
        })
        .catch((error) => {
            switch(error.code){
                case 'auth/invalid-login-credentials':
                setErrorMsg('Invalid Email or Password');
                break;
                
                default:
                    setErrorMsg('There was an unexpected error, please try again')
                
            }
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
            // ..
        });
 
   
    }

    return(
      <>
         <form className='form'>
            <h1 className='text-center text-white text-3xl m-2 mb-4'>Gallery App Sign in</h1>
          <input
          type='text'
          value={email}
          required
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='Enter Email'
          >

          </input>
           <input
          type='text'
          value={password}
          required
          onChange={(e)=> setPassword(e.target.value)}
          placeholder='Enter Password'
          >

          </input>

          <button onClick={onSubmit} className='m-2'>Sign in</button>

          <h1 className='text-white m-3'>{errorMsg}</h1>
         </form>
      </>
    )
}

export default Auth