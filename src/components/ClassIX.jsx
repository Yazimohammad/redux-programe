import React from "react";
import { useSelector } from "react-redux";
import { Studentitem } from "./Studentitem";
import { Grid } from "@mui/material";

export const ClassIX = (item) => {
  const bulbStatus = useSelector((state) => state.gameReducer.bulb);

  const students = [
    {
      name: "Sameena shaikh",
      phy: 6,
      skill: 8,
    },
    {
      name: "Sumit Kumar",
      phy: 8,
      skill: 9,
    },
    {
      name: "Nadeem Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "Sandeep Kadarkar",
      phy: 7,
      skill: 8,
    },
    {
      name: " Zahed Mirza",
      phy: 6,
      skill: 7,
    },
    {
      name: "Akmal Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: " mark steva",
      phy: 7,
      skill: 8,
    },
    {
      name: "Suman mishra",
      phy: 6,
      skill: 7,
    },
  ];

  return (
    <div>
      <h3>Class IX-{bulbStatus ? "On" : "Off"}</h3>
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
