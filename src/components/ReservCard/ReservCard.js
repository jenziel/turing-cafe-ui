import './ReservCard.css'
import trash from '../../assets/trash.png'
function ReservCard({name, id, date, time, partySize}){
    console.log('name', name)
    console.log('id',id )
    console.log('date', date )
    console.log('time', time)
    console.log('partySize', partySize )
    
    return (
        <div className='resy-card'>
            <h3>{name}</h3>
          
            <p>{date}</p>
            <p> {time} pm</p>
            <p>{partySize} people</p>
            <button id={id} key={id}>
                <img src={trash} alt="trashcan" className='delete-icon'></img>
            </button>
        </div>
    )
}


export default ReservCard
