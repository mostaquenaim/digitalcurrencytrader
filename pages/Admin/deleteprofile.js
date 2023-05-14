import { useState } from "react";
import Link from "next/link";
import MyLayout from "@/pages/Admin/component/layout";
import axios from "axios";
import { useRouter } from 'next/router'


export default function DeleteProfile() {
  const [confirmation, setConfirmation] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    try {
        const adminemail=sessionStorage.getItem('email')
        
    
            const result = await axios.delete('https://nestjs-production-0acd.up.railway.app/admin/deleteAdminByEmail', {
                params: { email: adminemail }, 
              });
    
              if(result) {
        try {
            const response = await axios.get('https://nestjs-production-0acd.up.railway.app/admin/logout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            router.push('/Admin');
          } catch (error) {
            console.error(error)
          }
              }
    
            
        
        } catch (error) {
          console.error('Error deleting admin:', error);
          // Handle error cases
        }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <center>
        {confirmation ? (
          <>
            <h1>Delete Profile</h1>
            <p>Are you sure you want to delete your profile? This action cannot be undone.</p>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Confirm Delete
            </button>
            {/* <Link href="/admin"> */}
              <a href="/Admin" className="text-blue-500 font-bold hover:text-blue-700 ml-2">Cancel</a>
            {/* </Link> */}
          </>
        ) : (
          <>
            <h1>Delete Profile</h1>
            <p>Click the button below to initiate the profile deletion process.</p>
            <button onClick={() => setConfirmation(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Profile
            </button> 
            <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => router.back()}>
      Go back
    </button>
          </>
        )}
      </center>
    </div>
  );
  
}
