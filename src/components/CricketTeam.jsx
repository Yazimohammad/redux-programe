import React from "react"
import { useSelector } from "react-redux"

export const CricketTeam=()=>{
    const cricTeam=useSelector(state=>state.gameReducer.cricketTeam)

return(

<div>
    <h1>Cricket Team</h1>
    <ul>
        {cricTeam.map(item=>
            
            <li>{item.name}</li>
            
        
            
            )}
    </ul>
</div>

)


}