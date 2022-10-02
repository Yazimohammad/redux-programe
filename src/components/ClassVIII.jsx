import React from "react";
import { useSelector } from "react-redux";
import { Studentitem } from "./Studentitem";
import { Grid } from "@mui/material";

export const ClassVIII = () => {
  const bulbStatus = useSelector(state=>state.gameReducer.bulb)
  const students = [
    {
      name: "Sujata Sinha",
      phy: 7,
      skill: 8,
    },
    {
      name: "Amit Kumar",
      phy: 6,
      skill: 9,
    },
    {
      name: "Umar Khan",
      phy: 9,
      skill: 6,
    },
    {
      name: "Sumit Kadarkar",
      phy: 7,
      skill: 7,
    },
    {
      name: "Kishore Kumar",
      phy: 5,
      skill: 7,
    },
    {
      name: " irfan Pathan",
      phy: 9,
      skill: 6,
    },
    {
      name: "virat kohli",
      phy: 7,
      skill: 7,
    },
    {
      name: " Gautam gambhir",
      phy: 5,
      skill: 7,
    },
    {
      name: " Shahzeb shaikh",
      phy: 8,
      skill: 7,
    },
    {
      name: " Sehwag warma",
      phy: 8,
      skill: 7,
    },
    {
      name: " Harshad Patel",
      phy: 5,
      skill: 7,
    },
  ];
  return (
    <div >
      {bulbStatus && <h1>Class VIII</h1>}
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
