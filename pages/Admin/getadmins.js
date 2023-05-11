import Link from "next/link"
import MyLayout from "@/pages/Admin/component/layout"
import axios from "axios";


export default function GetAdmins({ data }) {
    
  return (
      <>
       <MyLayout title="Get Admins"/>
      <h1>All Admins</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Admin/admins/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/index');
      const data = await response.data;
    
  return { props: { data } }
  }