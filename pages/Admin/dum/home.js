import MyLayout from "../component/layout"
import Header from "../component/header"

export default function Home() {
  const coins = ['Bitcoin', 'Dodgecoin', 'Etherium'];
  return (
    <>
  
    <MyLayout title="Home"/>

    <h1>Home Page</h1>
    <h3>Loren Posem .....</h3>
    <ul >
        {coins.map((coin) => (
          <li key={coin}>{coin}</li>
        ))}
      </ul>

    </>
  )
}
