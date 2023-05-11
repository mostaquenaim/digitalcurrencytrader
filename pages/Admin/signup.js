import MyLayout from "./component/layout"
import Header from "./component/header"
import Link from "next/link"


export default function SingUp() {
  return (
    <>
  
    <Header title="Registration"></Header>
    <center>
    <form action="./">
      <h1> Register </h1><br></br>
      <table>

     
      <tr>
        <td>
          Name
        </td>
        <td>
          <input type="text"></input>
        </td>
      </tr>

      <tr>
        <td>
Password 
        </td>
        <td>
<input type="password"></input>
        </td>
      </tr>

      <tr>
        <td>
Email 
        </td>
        <td>
          <input type="text"></input>
        </td>
      </tr>

      <tr>
        <td>
Re-passowrd 
        </td>
        <td>
          <input type="password"></input>
        </td>
      </tr>

      <tr>
        <td>
Username 
        </td>
        <td>
          <input type="text"></input>
        </td>
      </tr>

        </table>
      
      
      
      
      <input type="submit"></input>
    </form>
    <Link href="/">Login</Link>
</center>
    </>
  )
}
