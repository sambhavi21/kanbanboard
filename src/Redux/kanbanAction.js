import { FETCH_FAILED_TICKETS, FETCH_REQUIST_TICKETS, FETCH_SUCCESS_TICKETS,FETCH_SUCCESS_ALL ,FETCH_ORDER} from "./kanbanType"

const fetchTickets=()=>{
    return {type:FETCH_REQUIST_TICKETS}
}
const fetchSuccess=(data, data2)=>{
    return {type:FETCH_SUCCESS_TICKETS,payload:data, payload2:data2}
}
const fetchUsers=(data)=>{
  return {type:FETCH_SUCCESS_ALL,payload:data}
}
const fetchFailed=(err)=>{
    return {type:FETCH_FAILED_TICKETS,payload:err}
}
export const   fetchOrder=(e,Tickets,Users)=>{   //we can pass only "e" then also it will work same
  return {type:FETCH_ORDER,key:e, tickets:Tickets , users:Users}
 }
export const fetchSuccessTickets=()=>{
    return (dispatch)=>{
        dispatch(fetchTickets());
        var p=fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        p.then ((response)=>{
          response.json().then((result)=>{
          dispatch(fetchSuccess(result.tickets,result.users))
        //   dispatch(fetchUsers(result.users))
          });
        }).catch((err)=>{
          dispatch(fetchFailed(err));
        })
    }
    
}

