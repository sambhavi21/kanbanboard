 
import { MoreHorizontal } from 'react-feather';
import  './Ticket.css'
import DashBoard from './DashBoard';
 

function TicketCart(props) {
 var key=props.users.id;
 var ticket_boads=props.tickets
  
  return (
    <>
    <div className="column" style={{ width:"18rem", backgroundColor: "#add8e6" }}>
    <pre><h2 id='user_name'>{props.users.name}</h2></pre>
     { ticket_boads.filter(e=>e.userId==key).map((e)=>(<DashBoard key={e.id} ticket={e}/>))} 
    
  </div>
  
    
    
     
  

     </>
  )
  
}

export default TicketCart;
