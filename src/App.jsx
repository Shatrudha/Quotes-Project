import { useState } from "react";
import "./App.css"
function App(){
  const quotes=[
    "Success is not final; failure is not fatal.",
     "Believe you can and you’re halfway there.",
     "Dream big. Start small. Act now.",
     "Don’t stop until you’re proud.",
     "Your only limit is you.",
     "Work hard in silence; let success make the noise.",
     "The only way to get started is to stop talking and begin doing.",
     "Stay consistent. It pays off.",
     "Do something today that your future self will thank you for.",
     "Make today better than yesterday",
     "Small steps every day lead to big results",
     "Focus on progress, not perfection",
     "Great things never come from comfort zones"
  ]

  const[quote,setQuote]=useState(quotes[0]);
  
  const generate=()=>{
    const index=Math.floor(Math.random()*quotes.length);
    setQuote(quotes[index]);
  }
  return(
    <>
    <h1>Life Quotes</h1>
    <h2>"{quote}"</h2>
    <button onClick={generate} style={{backgroundColor:"red",color:"white"}}>More Quotes</button>
    <h3>No Pain No Gain  ❤️</h3>
    </>
  )
}
export default App