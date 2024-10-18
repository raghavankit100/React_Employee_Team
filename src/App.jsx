import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';

const employeesData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Samuel Green', age: 40 },
  { id: 4, name: 'Lucy Brown', age: 35 },
  { id: 5, name: 'Michael Blue', age: 28 }
];

const App = () => {
  const [team, setTeam] = useState([]);

  const addToTeam = (employee) => {
    if (!team.some((e) => e.id === employee.id)) {
      setTeam([...team, employee]);
    }
  };

  const removeFromTeam = (employeeId) => {
    setTeam(team.filter((e) => e.id !== employeeId));
  };

  const calculateAverageAge = () => {
    const totalAge = team.reduce((sum, employee) => sum + employee.age, 0);
    return team.length ? (totalAge / team.length).toFixed(1) : 0;
  };

  return (
    <div className="app-container">
      <EmployeeList employees={employeesData} addToTeam={addToTeam} />
      <TeamList team={team} removeFromTeam={removeFromTeam} averageAge={calculateAverageAge()} />
    </div>
  );
};

export default App;
