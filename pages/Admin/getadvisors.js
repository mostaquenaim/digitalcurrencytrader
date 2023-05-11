import Link from "next/link"
import MyLayout from "@/pages/Admin/component/layout"
import axios from "axios";


export default function GetAdvisors({ data }) {
    
  return (
      <>
       <MyLayout title="Get Advisors"/>
      <h1>All Advisors</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/Admin/advisors/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/getadvisors');
      const data = await response.data;
    
  return { props: { data } }
  }