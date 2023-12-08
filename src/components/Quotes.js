import { useState, } from "react"


const Quotes = ({data, handleClick}) => {
    const[display, setDisplay] = useState({ title: "", content: "" })

    const randomQuote = ()=>{
      const random = Math.floor(Math.random() * data.length)
      return data[random]
  }

  const displayRandom = ()=>{
    const quote = randomQuote();
    setDisplay({
      title: quote.text,
      author: quote.author.slice(0,-10),
    });
  }

  return (
    <div className="container">
        <div>
            <h2>Quote Generator</h2>
        </div>
        <div className="quote-container">
            <button onClick={() => handleClick(displayRandom)}>New Quote</button>
            <h3>{display.title}</h3>
            <p>- {display.author ? display.author : "Anonymous" }</p>
        </div>
    </div>
  )
}
export default Quotes