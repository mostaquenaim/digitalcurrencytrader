import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';
import MyHeader from './component/header';


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('https://nestjs-production-0acd.up.railway.app/admin/signin', { email, password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/admin/dashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("not login")
    }
  }

  

 

    return (
        <>
            <MyHeader title="Sign in"/>
   
        <form onSubmit={handleSubmit}>
  
      <h2 >Sign In</h2>
        <label  >Email</label>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
       
        <label  >Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
    
       <button type="submit" >Sign In</button>
                {error &&
                    
                    <p >{error}</p>
                    
                }   
                {/* {console.log("error22: "+error.message)} */}
          </form>
      

            </>
  )
}
