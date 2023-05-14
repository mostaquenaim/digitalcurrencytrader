
import Image from 'next/image'

export default function RemoveAdminData({data})   
{
    if(!data) return null

    const [success, setSuccess] = useState('')

    const handleButtonSubmit = async () => {
        try {
       
    
            const result = await axios.delete('https://nestjs-production-0acd.up.railway.app/admin/deleteAdminByEmail', {
                params: { email: data.email }, 
              });
    
              if(result) {
                setSuccess("Admin deleted")
              }
    
            
        
        } catch (error) {
          console.error('Error deleting admin:', error);
          
        }
      };

    return(
      <>

      <div className="flex flex-col items-center">
    <p className="text-red-500 font-bold">{success}</p>


        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">

          <Image src={`https://nestjs-production-0acd.up.railway.app/admin/getimage/${data.filename}`} alt="me" width="150" height="150" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Name: {data.name}</h1>
        <h1 className="text-3xl font-bold mb-4">Email: {data.email}</h1>
        <h1 className="text-3xl font-bold mb-4">Username: {data.uname}</h1>
        <button
          onClick={handleButtonSubmit}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </>
    )
}

