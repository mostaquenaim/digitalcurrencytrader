import Link from "next/link"
import MyLayout from "@/pages/Admin/component/layout"
import axios from "axios";


export default function viewDesc({ data }) {
    
  return (
      <>
      
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://nestjs-production-0acd.up.railway.app/admin/viewDesc');
      const data = await response.data;
    
  return { props: { data } }
  }