import MyLayout from "./component/layout"
import Header from "./component/header"
import Link from "next/link"


export default function SingIn() {
  return (
    <>
  
    <Header title="Sign in"></Header>
    <center>
    <form action="Admin/home">
      <h1> Sign in </h1><br></br>
      Username/email <input type="text"></input><br></br>
      Password <input type="password"></input><br></br>
      <input type="submit"></input>
    </form>
    <Link href="Admin/signup">Register</Link>
</center>
    </>
  )
}
