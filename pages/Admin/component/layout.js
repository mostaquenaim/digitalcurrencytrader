import Header from "./header";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function MyLayout(props) {

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

  
  return (
    <>
      <Header title={props.title} />
      <center>
        <nav className="text-center bg-gray-200 py-2 fixed top-0 left-0 right-0 z-10">
          <i>
            <h3>
              <p>Buy! Sell! Exchange! Enjoy!</p>
            </h3>
          </i>
          <br />
          <Link href="./home">Home</Link> |
          <Link href="./about">About US</Link> |
          <Link href="./statistics">Statistics</Link> |
          <Link href="./transactions">Transactions</Link> |
          <Link href="./exchange">Exchange</Link> |
          <Link href="./news">News</Link> |
          <Link href="./settings">Settings</Link> |
          <Link href="./history">History</Link> |
          <Link href="./dashboard">Dashboard</Link> |
          <button onClick={handleSignOut}>Sign out</button>
        </nav>
      </center>

      <main className="container mx-auto">{props.children}</main>

      {/* <footer className="fixed bottom-0 w-full bg-gray-200 py-2 text-center">
        <div className="text-sm">
          Digital Crypto Currency &copy; {new Date().getFullYear()}
          <br />
          <Link href="./privacy">Privacy</Link> |
          <Link href="./faq">FAQ</Link> |
          <Link href="./support">Support</Link>
        </div>
      </footer> */}
    </>
  );
}
