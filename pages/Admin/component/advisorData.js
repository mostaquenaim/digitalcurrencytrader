
import Image from 'next/image'

export default function AdminLayout({data})   
{
    return(
        <>
      
      <h1>Firstname: {data.Firstname}</h1>
      <h1>Lastname: {data.Lastname}</h1>
      <h1>Email: {data.Email}</h1>
      <h1>Username: {data.Username}</h1>
      <h1>Mobile no: {data.Mobile}</h1>
      <h1>Picture: </h1>
      <Image src={"http:/localhost:3000/admin/getadvisorimage/"+data.filename} alt="me" width="150" height="150" />
        </>
    )
}