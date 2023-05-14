
import Image from 'next/image'

export default function AdvisorLayout({data})   
{if(!data) return null
    return(
        <>
      
      
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <Image src={"http:/localhost:3000/admin/getadvisorimage/" + data.filename} alt="me" width="500" height="500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Name: {data. Firstname}</h1>
        <h1 className="text-3xl font-bold mb-4">Email: {data.Email}</h1>
        <h1 className="text-3xl font-bold mb-4">Username: {data.Username}</h1>
        
      </div>
        </>
    )
}