
export default function SSR({ data }) {
  if(!data) return null
    return (
        <>
        <h1>This SSR request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
           <p>email: {item.email}</p>   
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await fetch('https://nestjs-production-9259.up.railway.app/admin/index');
        const data = await response.json();
      
    return { props: { data } }
    }