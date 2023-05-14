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
      
      const response = await axios.post('https://nestjs-production-0acd.up.railway.app/admin/signin', { email, password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/Admin/dashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

  

 

    return (
        <>
         <LoggedCheck />
      <MyHeader title="Admin Sign In" />

      <div
        className="flex justify-center items-center h-screen"
        style={{
          background: `url(cryptobg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <center>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Sign In</h2>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Sign In
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </center>
          </form>
        </div>
      </div>
      

            </>
  )
}

