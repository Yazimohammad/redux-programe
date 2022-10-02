export const gameReducer=(state={
    cricketTeam:[],
    footballTeam:[],
    bulb:false,
},action)=>{
    if(action.type==="bulb"){
        return{
            ...state,
            bulb:!state.bulb
        }
    }
if(action.type==="cricketTeam"){
    return{
        ...state,
        cricketTeam:[action.payload,...state.cricketTeam],
    }
}
if(action.type==="footballTeam"){
    return{
        ...state,
        footballTeam:[action.payload,...state.footballTeam],
    }
}
return state;
}