import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button, Badge } from "@mui/material";
import { color } from "@mui/system";

export const Navbar = () => {
  const dispatch = useDispatch();
  const bulbStatus = useSelector((state) => state.gameReducer.bulb);
  const cricTeam = useSelector((state) => state.gameReducer.cricketTeam);
  const footTeam = useSelector((state) => state.gameReducer.footballTeam);
  const handleclick = () => {
    dispatch({
      type: "bulb",
      payload: "",
    });
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Link to="/8th">
          <Card>
            <CardContent>Class VIII</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/9th">
          <Card>
            <CardContent>Class IX</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/10th">
          <Card>
            <CardContent>Class X</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/cricinfo">
          <Badge badgeContent={cricTeam.length} color="primary">
            <Card>
              <CardContent>Cricket Team </CardContent>
            </Card>
          </Badge>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/coaches">
          <Card>
            <CardContent>Coaches List</CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/footinfo">
          <Badge badgeContent={footTeam.length} color="secondary">
            <Card>
              <CardContent>Football Team </CardContent>
            </Card>
          </Badge>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color={bulbStatus ? "success" : "error"}
          onClick={handleclick}
        >
          {bulbStatus ? "ON" : "OFF"}
        </Button>
      </Grid>
    </Grid>
  );
};
