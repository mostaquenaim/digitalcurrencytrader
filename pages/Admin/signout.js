import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Signout(){
    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('https://nestjs-production-9259.up.railway.app/admin/signout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('/Admin');
          } catch (error) {
            console.error(error)
          }
    
  };
  return(
    <p>Logged out</p>
  )
}