  
  const fetchData = async ()=>{
        try {
            const res = await fetch("https://type.fit/api/quotes")
            const quo = await res.json();
            return quo;
          } catch (e) {}
    }

    export default fetchData