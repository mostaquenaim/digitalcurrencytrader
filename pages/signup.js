import MyLayout from "./component/layout"
import Header from "./component/header"

export default function SingUp() {
  return (
    <>
  
    <Header title="Registration"></Header>
    <center>
    <form action="/">
      <h1> Register </h1><br></br>
      Name <input type="text"></input><br></br>
      Password <input type="password"></input><br></br>
      Re-passowrd <input type="password"></input><br></br>
      Username <input type="text"></input><br></br>
      Email <input type="text"></input><br></br><br></br>
      <input type="submit"></input>
    </form>
</center>
    </>
  )
}
