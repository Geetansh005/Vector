import Card from './Card'
import data from './data'
function Try() {
  return (
    <>
    <div className='main'>
      <div className='wrap'>
        {data.map(function(e){
          return(
            <Card name={e.name} image={e.image} desc={e.desc} instructor={e.instructor} duration={e.duration}
            />

          )
        })
        }

      </div>
    </div>
    
    </>
  )
}

export default Try