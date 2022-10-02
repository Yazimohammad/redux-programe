import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Button, Grid, Card, CardContent } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const Studentitem = ({ item }) => {
  const dispatch=useDispatch();
  const footTeam=useSelector(state=>state.gameReducer.footballTeam)
  const cricTeam=useSelector(state=>state.gameReducer.cricketTeam)
  const handleCricket=(curr)=>{
    const filtered=cricTeam.filter(item=>item.name===curr.name)
    if(filtered.length>0){
      console.log("Already exist")
    }else{
dispatch({
  type:"cricketTeam",
  payload: curr,
})
}
  }
  const handlefootball=(curr)=>{
    const filtered=footTeam.filter(item=>item.name===curr.name)
    if(filtered.length>0){
      console.log("Already exist")
    }else{
dispatch({
  type:"footballTeam",
  payload:curr,
})
} 
  }
  return ( 
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <AccountBoxIcon />
          </Grid>
          <Grid item xs={8}>
            <span>{item.name}</span>
          </Grid>
          <Grid item xs={6}>
            <span> Physical : {item.phy}</span>
          </Grid>
          <Grid item xs={6}>
            <span> Skill : {item.skill}</span>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="success" 
            disabled={cricTeam.some(p=>p.name===item.name)}
            onClick={()=>handleCricket(item)}>Cricket</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error" 
            disabled={footTeam.some(p=>p.name===item.name)}
            onClick={()=>handlefootball(item)}>Football</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
