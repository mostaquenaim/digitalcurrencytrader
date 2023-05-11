import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoggedCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (session) {
      router.push('/Admin/dashboard');
    }
    
  }, []);

  return null;
};


