import Header from "./header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function MyLayout(props) {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(session);
      }
    }
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://nestjs-production-0acd.up.railway.app/admin/logout')
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
    <br />
    <Link href="./updateadmin" className="text-blue-500 font-bold hover:text-blue-700">
      Update Profile
    </Link>{" "}
    |{" "}
    <Link href="./deleteprofile" className="text-red-500 font-bold hover:text-red-700">
      Delete Profile
    </Link>
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
