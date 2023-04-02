import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <center><nav>
            <i><h3><p>Buy ! Sell ! Exchange ! Enjoy !</p></h3></i><br></br>
        <Link href="/home"> Home</Link> |
        <Link href="/about"> About US</Link> |
        <Link href="/statistics"> Statistics</Link> |
        <Link href="/transactions"> Transactions</Link> |
        <Link href="/exchange"> Exchange </Link> |
        <Link href="/news"> News</Link> |
        <Link href="/settings"> Settings</Link> |
        <Link href="/history"> History</Link> |
        <Link href="/"> Sign out</Link> 

    
        
        </nav> </center> 
        
        
        <main>

        </main>
        <center><div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            Digital Crypto Currency @copyright<br></br>
            
            <Link href="/privacy"> Privacy</Link> |
            <Link href="/faq"> FAQ</Link> |
            <Link href="/support"> Support</Link>
            </div></center>
        
        </>
    )
}