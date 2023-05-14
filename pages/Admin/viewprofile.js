import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/Admin/component/layout"
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import SessionCheck from '@/pages/Admin/component/sessioncheck'
import MyFooter from './component/adminfooter';
import Image from 'next/image'
import AdminDrawer from './component/adminDrawer';



export default function viewprofile() {


    const [user, setUser] = useState({
        name: "",
        uname: "",
        email: "",
        password:"",
        mbl_no: "",
        address: "",
        birthDate:"",
        filename:""
      });
      const [email, setEmail] =useState("")
   
      useEffect(() => {
        loadUser();
      }, []);

    const loadUser = async () => {
        const adminemail=sessionStorage.getItem('email')
        setEmail(adminemail)

        const result = await axios.get(`http://localhost:3000/admin/profile`, {
            params: { email: adminemail }, 
          });
    
        setUser(result.data);
      };

    

    
       

      return (
        <>
          <SessionCheck />
          <AdminDrawer title="My Profile" />
          <MyLayout/>
          <div className="text-center bg-gray-200 min-h-screen">
            <div className="pt-40 sm:ml-10">
              <h1 className="text-2xl font-bold mb-4">My Profile</h1>
              <center>
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <Image src={`http:/localhost:3000/admin/getimage/${user.filename}`} alt="me" width="150" height="150" />
                </div>
              </center>
      
              <div className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2 text-blue-600">
                    Name
                  </label>
                  <label
                    id="name"
                    className="border border-blue-400 rounded w-full px-3 py-2 bg-blue-200 text-blue-800"
                  >
                    {user.name}
                  </label>
                </div>
      
                <div className="mb-4">
                  <label htmlFor="uname" className="block font-bold mb-2 text-green-600">
                    Username
                  </label>
                  <label
                    id="uname"
                    className="border border-green-400 rounded w-full px-3 py-2 bg-green-200 text-green-800"
                  >
                    {user.uname}
                  </label>
                </div>
      
                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold mb-2 text-red-600">
                    Email
                  </label>
                  <label
                    id="email"
                    className="border border-red-400 rounded w-full px-3 py-2 bg-red-200 text-red-800"
                  >
                    {user.email}
                  </label>
                </div>
      
                <div className="mb-4">
                  <label htmlFor="password" className="block font-bold mb-2 text-purple-600">
                    Password
                  </label>
                  <label
                    id="password"
                    className="border border-purple-400 rounded w-full px-3 py-2 bg-purple-200 text-purple-800"
                  >
                    {user.password}
                  </label>
                </div>
      
                <div className="mb-4">
                  <label htmlFor="mbl_no" className="block font-bold mb-2 text-yellow-600">
                    Mobile Number
                  </label>
                  <label
                    id="mbl_no"
                    className="border border-yellow-400 rounded w-full px-3 py-2 bg-yellow-200 text-yellow-800"
                  >
                    {user.mbl_no}
                  </label>
                </div>
      
                <div className="mb-4">
                  <label htmlFor="address" className="block font-bold mb-2 text-indigo-600">
                    Address
                  </label>
                  <label
                    id="address"
                    className="border border-indigo-400 rounded w-full px-3 py-2 bg-indigo-200 text-indigo-800"
                  >
                    {user.address}
                  </label>
                </div>
              </div>
      
              <br />
              <br />
              <br />
              <br />
      
              <MyFooter />
            </div>
          </div>
        </>
      );
      
      
      
    
}

// export async function getServerSideProps(context) {
    
//        console.log(context)
//     const response = await axios.get('http://localhost:3000/admin/profile', {
//         params: { email: context.email }, 
//       });

//        const data = await response.data;
//        console.log(data)
      
//    return { props: { data } }
//    }
