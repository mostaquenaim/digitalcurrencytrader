import Updateadmin from "../updateadmin";

export default function Initialupdate() {
    const adminemail=sessionStorage.getItem('email')

    const handleUpdateAdmin = async (event) => {
        event.preventDefault();
        try {
          const adminemail = sessionStorage.getItem('email');
          console.log(adminemail);
      
          const response = await axios.get('https://nestjs-production-9259.up.railway.app/admin/profile', {
            params: { email: adminemail }, 
          });
          
          console.log(response.data);
          
          router.push({
            pathname: '/Admin/updatedmin',
            query: { data: { response }   },
          });
        } catch (error) {
          console.error(error);
        }
      };
}
