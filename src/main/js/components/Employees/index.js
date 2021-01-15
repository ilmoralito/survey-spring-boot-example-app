import React from "react";

function CreateDialog(param) {
    function handleSubmit(event) {
        event.preventDefault()

        const employee = {}


    }

    return (
        <div>
            <a href="#createEmployee">Create</a>
            <div id="createEmployee" className="modalDialog">
                <div>
                    <a href="#" title="Close" className="close">X</a>
                    <h2>Create employee</h2>
                    <form onSubmit={handleSubmit}>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Employee({ employee }) {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.description}</td>
    </tr>
  );
}

export default function Employees({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <Employee key={employee._links.self.ref} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}
