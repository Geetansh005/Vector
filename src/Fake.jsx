import { useState,useEffect } from "react"

function Fake() {
    const[apiData,setApiData]=useState([])
   async function fetchData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setApiData(data)
    }
    console.log(apiData)
    useEffect(function(){
        fetchData()
    },[])

    return(
        <>
        {
        apiData.map((e)=>{
            return(
                <div style={{backgroundColor:"whitesmoke",border:"2px solid black"}} >
                    <h1 >User name:{e.name}</h1>
                    <br />
                    <h2 >User Email:{e.email}</h2>
                    <br />
                    <h3 >User location:{e.address.geo.lat}</h3>
                    <br />

                </div>
            )
        }
    )}       
   </>
  )
}

export default Fake