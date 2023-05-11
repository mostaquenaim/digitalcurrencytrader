import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import Session from "./session"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import MyFooter from "./adminfooter";

export default function AdminLayout(props)   
{

    const [email, setEmail] = useState(null);
      const router = useRouter();
      
    useEffect(() => {
        if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
        {
            const session = sessionStorage.getItem('email');
            if (session) {
              setEmail(session);
             
            }          
        }
     
    }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:3000/admin/logout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('/Admin');
          } catch (error) {
            console.error(error)
          }
    
  };

  const handleUpdateAdmin = async (event) => {
    event.preventDefault();
    try {
      const adminemail = sessionStorage.getItem('email');
      console.log(adminemail);
  
      const response = await axios.get('http://localhost:3000/admin/profile', {
        params: { email: adminemail }, 
      });
      
      console.log(response.data);
      
      router.push({
        pathname: '/Admin/updatedmin',
        query: { data: response.data  },
      });
    } catch (error) {
      console.error(error);
    }
  };

    return(
        <>
        <Header title={props.title} />
        <center><nav className="text-center bg-gray-200 py-2 fixed top-0 left-0 right-0 z-10">
            <i><h3><p>Buy ! Sell ! Exchange ! Enjoy !</p></h3></i><br></br>
        <Link href="./home"> Home</Link> |
        <Link href="./getadmins">See All Admins</Link> |
        <Link href="./findadmins">Find admin by ID</Link> |
        <Link href="./findusers">Find customer by ID</Link> |
        <Link href="./getusers">See all customers</Link> |
        <Link href="./findadvisors">Find advisor by ID</Link> |
        <Link href="./getadvisors">See all advisors</Link> | 
        <Link href="./findadminbyname">Find admin by name</Link> | 
        <Link href="./findadminbymobile">Find admin by mobile</Link> | 
        <Link href="./addnewadmin">Add new admin</Link> | 
        <button onClick={handleUpdateAdmin}>Update profile</button> | 
        <button onClick={handleSignOut}>Sign out</button>
    
        
        </nav> </center> 
        
        
        
       
        
        </>
    )
}