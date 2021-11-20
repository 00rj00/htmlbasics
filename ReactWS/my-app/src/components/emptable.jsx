import React from "react";
const EmpTable = (props) => {
  return (
    <div>
      <table class="table table-hover mt-5 table-dark w-50 mx-auto">
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>EmployeeName</th>
            <th>EmployeeSalary</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => (
            <tr>
              <td>{emp.empId}</td>
              <td>{emp.empName}</td>
              <td>{emp.empSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
