import AdminDrawer from "./component/adminDrawer"
import AdminLayout from "./component/adminLayout"
import Header from "./component/header"
import Session from "./component/session"
import SessionCheck from "./component/sessioncheck"
import DashBg from "./component/dashboardbg"
import CoinDetails from "./component/coindetails"
export default function Dashboard() {
    return (
      <>
      
      <SessionCheck/>
      

      <AdminDrawer title="Dashboard"/>
      <CoinDetails/>
      <DashBg/>
      
      


      <h1>Dashboard</h1>
      <h3>Welcome to your dashboard</h3>
      </>
    )
  }
  