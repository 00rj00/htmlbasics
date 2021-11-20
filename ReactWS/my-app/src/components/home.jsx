import React, { Component } from "react";
import EmpTable from "./emptable";

class Home extends React.Component {
  state = {
    employee: {
      empId: 13,
      empName: "Harshith",
      empSalary: 38000,
    },
    employees: [
      { empId: 12, empName: "Sos", empSalary: 23300 },
      { empId: 14, empName: "Tarun", empSalary: 23300 },
      { empId: 15, empName: "Anil", empSalary: 23300 },
    ],
  };

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <table class="table table-hover mt-5 table w-50 mx-auto">
          <thead>
            <tr>
              <th>EmployeeID</th>
              <th>EmployeeName</th>
              <th>EmployeeSalary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.employee.empId}</td>
              <td>{this.state.employee.empName}</td>
              <td>{this.state.employee.empSalary}</td>
            </tr>
          </tbody>
        </table>
        <EmpTable employees={this.state.employees} />
      </div>
    );
  }
}

export default Home;
