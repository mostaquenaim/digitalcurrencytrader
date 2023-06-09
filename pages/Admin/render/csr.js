import React from "react"
import { useEffect } from "react"

export default function CSRPage() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://nestjs-production-0acd.up.railway.app/Admin/index');
      const data = await response.json();
      setData(data);
    }
    getData();
  })
  return (
    <>
      <h1>This CSR request!</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
         <h1>Name: {item.name}</h1>  
          <h1>Email: {item.email}</h1> 
            </li>
        ))}
      </ul>
    </>
  )
}