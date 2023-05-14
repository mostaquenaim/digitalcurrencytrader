import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/Admin/component/layout';
import AdminLayout from '@/pages/Admin/component/adminData';
import AdminData from '@/pages/Admin/component/adminData';
import AdminDrawer from './component/adminDrawer';

export default function FindAdmin({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findadmins',
      query: { inputValue: inputValue }
    });
  }

  return (
<>
      <AdminDrawer title="Find Admin" />
      <div className="text-center bg-gray-200 min-h-screen">
      <div className="pt-40 sm:ml-10">
        <h1 className="text-2xl font-bold mb-4">Find admin by id</h1>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Fetch Data
        </button>
      </form>
      {data.status == null ? (
        <AdminData data={data} />
      ) : (
        <p className="mt-4 text-red-500">{data.status}</p>
      )}
      </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findadmin/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid admin id"}
    }
  };
}
}
