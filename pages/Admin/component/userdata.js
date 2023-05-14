
import Image from 'next/image'

export default function UserLayout({data})   
{if(!data) return null
  return (
    <>
      <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <Image src={"https://nestjs-production-0acd.up.railway.app/getcustomerimage/" + data.file} alt="me" width="500" height="500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Name: {data.name}</h1>
        <h1 className="text-3xl font-bold mb-4">Email: {data.email}</h1>
        <h1 className="text-3xl font-bold mb-4">Username: {data.username}</h1>
        
      </div>
    </>
  );
  
}