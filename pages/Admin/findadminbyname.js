import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/Admin/component/layout';
import AdminLayout from '@/pages/Admin/component/adminData';

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
      pathname: 'findadminbyname',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
     <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.status == null? 
   <AdminLayout data={data}/>
      : data.status }
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findadminbyuname/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid admin username"}
    }
  };
}
}
