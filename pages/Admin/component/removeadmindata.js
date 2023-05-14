import Image from 'next/image'
import axios from 'axios'
import { useState } from "react"


export default function RemoveAdminData({ data }) {


    const [email, setEmail] =useState("")
    const [success, setSuccess] = useState('')


  const handleButtonSubmit = async () => {
    try {
    //   await axios.delete('https://nestjs-production-0acd.up.railway.app/admin/deleteAdminByEmail', {
    //     data: { email: data.email },
    //   });
    console.log(data)
        setEmail(data.email)
        console.log(email)

        const result = await axios.delete('https://nestjs-production-0acd.up.railway.app/admin/deleteAdminByEmail', {
            params: { email: data.email }, 
          });

          if(result) {
            setSuccess("Admin deleted")
          }

        
    
    } catch (error) {
      console.error('Error deleting admin:', error);
      // Handle error cases
    }
  };

//   const adminemail=sessionStorage.getItem('email')
//         setEmail(adminemail)

//         const result = await axios.get(`https://nestjs-production-0acd.up.railway.app/admin/profile`, {
//             params: { email: adminemail }, 
//           });
    
//         setUser(result.data);

  return (
    <>

      <div className="flex flex-col items-center">
    <p className="text-red-500 font-bold">{success}</p>

        
        <h1 className="text-3xl font-bold mb-4">Name: {data.name}</h1>
        <h1 className="text-3xl font-bold mb-4">Email: {data.email}</h1>
        <h1 className="text-3xl font-bold mb-4">Username: {data.uname}</h1>
        
        <button
          onClick={handleButtonSubmit}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </>
  );
}
