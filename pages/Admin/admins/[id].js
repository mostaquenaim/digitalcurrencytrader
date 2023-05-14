import MyLayout from "@/pages/Admin/component/layout"
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import MyHeader from "../component/header";

export default function AdminProfile({ data } ) {
const router = useRouter();
    return (
      <>
<MyHeader title="Admin details"/>   
   

      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Address: {data.address}</h1>
      <h1>Username: {data.uname}</h1>
      <h1>Birth date: {data.birthDate}</h1>
      <h1>Mobile no: {data.mbl_no}</h1>
      <h1>Picture: </h1>
      <Image src={"https://nestjs-production-0acd.up.railway.app/admin/getimage/"+data.filename} alt="me" width="150" height="150" />
     <br></br>
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://nestjs-production-0acd.up.railway.app/admin/findadmin/'+id);
    const data = await response.data;
   
return { props: { data } }
}