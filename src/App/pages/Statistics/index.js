import React from 'react';

function Statistics({teams}) {
  return (
    <div>
      {teams.map((team, i) => (
        <p key={i}>{team.team}</p>
      ))}
    </div>
  );
}
export default Statistics;
