import AdminLayout from "./component/adminLayout"
import Header from "./component/header"
import Session from "./component/session"
import SessionCheck from "./component/sessioncheck"
export default function Dashboard() {
    return (
      <>
      
      <AdminLayout title="Dashboard"/>


      <SessionCheck/>

      <h1>Dashboard</h1>
      <h3>Welcome to your dashboard</h3>
      </>
    )
  }
  