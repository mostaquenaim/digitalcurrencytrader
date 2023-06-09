import Link from "next/link"
import MyLayout from "@/pages/Admin/component/layout"
import axios from "axios";
import AdminDrawer from "./component/adminDrawer";


export default function GetAdvisors({ data }) {
    
  return (
    <>
  <AdminDrawer title="Get Advisors" />
  <center>

  <div className="relative bg-blue-100 min-h-screen">
    <div className="mt-20">
      <h1 className="text-3xl font-bold mb-4">All Advisors</h1>

      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {data.map(item => (
          <li key={item.id} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                  <b>
                    <Link href={`/Admin/advisors/${item.id}`} className="text-blue-500 hover:text-blue-700">
                      {item.Firstname}
                    </Link>
                  </b>
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  <Link href={`/Admin/advisors/${item.id}`} className="text-blue-500 hover:text-blue-700">
                    {item.Email}
                  </Link>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  </center>
  <style jsx>{`
    body {
      background-image: url('cryptobg');
      background-size: cover;
      background-position: center;
    }
  `}</style>
</>

  
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://nestjs-production-0acd.up.railway.app/admin/getadvisors');
      const data = await response.data;
    
  return { props: { data } }
  }