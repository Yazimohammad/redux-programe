import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Button, Grid, Card, CardContent } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const CoachItem = ({ item }) => {
  const dispatch=useDispatch();
  
  return ( 
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <AccountBoxIcon />
          </Grid>
          <Grid item xs={3}>
            <span>{item}</span>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">ASSING</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
