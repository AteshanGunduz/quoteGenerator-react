import { useState, useEffect } from "react"
import Quotes from "./Quotes"
import fetchData from "./Data"



const App = () => {
    const[data, setData] = useState([])

    useEffect(()=>{
        const data = async()=>{
            const quotes = await fetchData()
            setData(quotes)
        }
        data()
    },[])

    const handleClick = (displayRandom)=>{
        displayRandom()
    }


  return (
    <div className="bigbox">
        <Quotes data={data} handleClick={handleClick}/>
    </div>
  )
}
export default App