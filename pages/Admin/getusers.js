import Link from "next/link"
import MyLayout from "@/pages/Admin/component/layout"
import axios from "axios";


export default function GetUsers({ data }) {
    
  return (
      <>
       <MyLayout title="Get Users"/>
      <h1>All customers</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Admin/users/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/getusers');
      const data = await response.data;
    
  return { props: { data } }
  }