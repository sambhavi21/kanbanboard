import { FETCH_FAILED_TICKETS, FETCH_REQUIST_TICKETS, FETCH_SUCCESS_TICKETS ,FETCH_SUCCESS_ALL, FETCH_ORDER,} from "./kanbanType"

const initialState={
 Tickets:[],
 Users:[],
 loading_tickets:false,
 Tickets_error:'',
}
const kanban_reducer=(state=initialState,action)=>{
 switch(action.type){
    case FETCH_REQUIST_TICKETS:{
        return{...state,loading_tickets:true}
    }
    case FETCH_SUCCESS_TICKETS:{
        return{...state,loading_tickets:false,Tickets:action.payload, Users:action.payload2}
    }
    case FETCH_FAILED_TICKETS:{
        return {...state,loading_tickets:false,Tickets_error:action.payload}
    }
    // case FETCH_SUCCESS_ALL:{
    //     return {...state,loading_tickets:false,Users:action.payload}
    // }
    case FETCH_ORDER:{
        var tick=[...state.Tickets]
        var use=[...state.Users]
        if(action.key==1){
           tick.sort((a,b)=>(b.priority-a.priority))
           console.log(tick)
        }
        else if(action.key==-1){
            var obj= {
                "usr-1": "Anoop sharma",
                "usr-2": "Yogesh",
                "usr-3": "Shankar Kumar",
                "usr-4": "Ramesh",
                "usr-5": "Suresh",
              }
           tick.sort((a, b) => {
            const nameA = obj[a.userId].toUpperCase();
            const nameB = obj[b.userId].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        // use.sort((a, b) => {
        //     const nameA =a.name.toUpperCase();
        //     const nameB = b.name.toUpperCase();
        //     if (nameA < nameB) {
        //         return -1;
        //     }
        //     if (nameA > nameB) {
        //         return 1;
        //     }
        //     return 0;
        // })
        console.log(tick)
        
        }
        return {...state,loading_tickets:false,Tickets:tick, Users: use}
    }
    default:
        return state;
    
 }
}
 export default kanban_reducer;