import { useNavigate } from "react-router-dom"

function Card({name,image,desc,instructor,duration}) { 
  const navigate = useNavigate()
 
  function handelClick(){
    navigate("/detail")
  }
  return (
    <>
      <div className="red">
        <div className="green">
        <img className="tip" src={image} alt="fool" />
        <h1 id="cf">{name}</h1>
        <br/>
        <p id="cs"><strong>Instructor:{instructor}</strong></p>
        <br />
        <p id="cd">Duration:{duration}</p>
        <br />
        <p id="cr">{desc}</p>
        <button onClick={handelClick} className="ex">Buy now</button>
        </div>
      </div>
    </>
  )
}

export default Card