import React from "react";
import { useSelector } from "react-redux";
import { Studentitem } from "./Studentitem";
import { Grid } from "@mui/material";

export const ClassX = (item) => {
  const bulbStatus=useSelector(state=> state.gameReducer.bulb)
  const students = [
    {
      name: "Vaishali Sinha",
      phy: 7,
      skill: 9,
    },
    {
      name: "Suraj Kale",
      phy: 7,
      skill: 9,
    },
    {
      name: "Afridi Khan",
      phy: 9,
      skill: 7,
    },
    
    {
        name: "Saima Shaikh",
        phy: 6,
        skill: 9,
      },
      {
        name: " Arif Shaikh",
        phy: 6,
        skill: 8,
      },
      {
        name: "yuraj nerli",
        phy: 7,
        skill: 9,
      },
      {
        name: " Chetan Rathod",
        phy: 7,
        skill: 8,
      },
      {
        name: " MD Yazdan",
        phy: 9,
        skill: 9,
      },
  ];
  return (
    <div>
      <h3>Class X - {bulbStatus ? <img src = "images/on.jfif" width = {40} height={40}/> :<img src = "images/off.jfif" width = {40} height={40}/> }</h3>
      <Grid container spacing={3}>
        {students.map((item) => (
          <Grid item xs={3}>
            <Studentitem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
