import React from 'react';

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <div className="employee-list">
      <h2>All Employees</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-item">
          <span>{employee.name} {employee.age}</span>
          <button onClick={() => addToTeam(employee)} style={{background: '#99C3FF'}}>ADD</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
