import React from "react";
import { useSelector } from "react-redux";

export const FootballTeam = () => {
  const footTeam = useSelector((state) => state.gameReducer.footballTeam);

  return (
    <div>
      <h1> Football Team</h1>
      <ul>
        {footTeam.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
