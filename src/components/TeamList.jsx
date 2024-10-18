import React from 'react';

const TeamList = ({ team, removeFromTeam, averageAge }) => {
  return (
    <div className="team-list">
      <h2>Team Members</h2>
      {team.length === 0 ? (
        <p>No team members added yet.</p>
      ) : (
        <>
          {team.map((employee) => (
            <div key={employee.id} className="team-item">
              <span>{employee.name} {employee.age}</span>
              <button onClick={() => removeFromTeam(employee.id)} style={{background: '#F86C55'}}>REMOVE</button>
            </div>
          ))}
          <h3>Average Age: {averageAge}</h3>
        </>
      )}
    </div>
  );
};

export default TeamList;
