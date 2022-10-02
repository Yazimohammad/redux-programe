import React from "react";
import { useSelector } from "react-redux";
import { CoachItem } from "./CoachItem";

export const Coaches = () => {
  const criccoach = useSelector((state) => state.coachReducer.cricketCoaches);
  const footcoach = useSelector((state) => state.coachReducer.footballCoaches);
  const kabcoach = useSelector((state) => state.coachReducer.kabaddiCoaches);
  return (
    <div>
      <h1>Cricket Coaches</h1>

      {criccoach.map((item) => (
        <CoachItem item={item} />
      ))}
      <h1>Football Coaches</h1>

      {footcoach.map((item) => (
        <CoachItem item={item} />
      ))}
      <h1>Kabaddi Coaches</h1>

      {kabcoach.map((item) => (
        <CoachItem item={item} />
      ))}
    </div>
  );
};
