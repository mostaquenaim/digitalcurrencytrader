import Image from 'next/image'
import axios from 'axios'
import { useState } from "react"


export default function RemoveAdvisorData({ data }) {


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

        const result = await axios.delete('https://nestjs-production-0acd.up.railway.app/admin/deleteAdv', {
            params: { email: data.email }, 
          });

          if(result) {
            setSuccess("Advisor deleted")
          }

        
    
    } catch (error) {
      console.error('Error deleting advisor:', error);
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

        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">

          <Image src={`https://nestjs-production-0acd.up.railway.app/admin/getadvisorimage/${data.filename}`} alt="me" width="150" height="150" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Name: {data.Firstame}</h1>
        <h1 className="text-3xl font-bold mb-4">Email: {data.Email}</h1>
        <h1 className="text-3xl font-bold mb-4">Username: {data.Username}</h1>
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