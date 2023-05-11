import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';
import MyHeader from './component/header';
import Link from "next/link"
import SessionCheck from './component/sessioncheck';
import LoggedCheck from './component/isloggedin';





export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      
      const response = await axios.post('https://nestjs-production-9259.up.railway.app/admin/signin', { email, password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/Admin/dashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("not login")
    }
  }

  

 

    return (
        <>
        <LoggedCheck/>
            <MyHeader title="Sign in"/>
   
        <form onSubmit={handleSubmit}>
  
  <center>
      <h2 >Sign In</h2>
        <label  >Email</label>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  /> <br></br>
       
        <label  >Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  /><br></br>
    
       <button type="submit" >Sign In</button><br></br>

       <Link href="Admin/signup">Register</Link>
       
                {error &&
                    
                    <p >{error}</p>
                    
                }   
                {/* {console.log("error22: "+error.message)} */}
                </center>
          </form>
      

            </>
  )
}

