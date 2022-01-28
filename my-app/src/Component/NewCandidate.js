import React, { useState } from "react";
import data from "../MOCK_DATA.json";
import { nanoid } from "nanoid";

export default function NewCandidate() {
  const [tabledata, settabledata] = useState(data);
  const [dataadd, setdataadd] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const uservalue = e.target.getAttribute("name");
    const addvalue = e.target.value;
    const newvalues = { ...dataadd };
    newvalues[uservalue] = addvalue;
    setdataadd(newvalues);

    console.log(dataadd);
  };

  const HandleClick = (e) => {
    e.preventDefault();
    const newData = {
      id: nanoid(),
      first_name: dataadd.first_name,
      last_name: dataadd.last_name,
      email: dataadd.email,
      gender: dataadd.gender,
    };
    const h = [...tabledata, newData];
    settabledata(h);
    console.log(tabledata);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Add New Candidate</h1>

      <div className="names">
        <input
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          required="required"
          value={dataadd.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Enter your last name"
          required="required"
          value={dataadd.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="email">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required="required"
          value={dataadd.email}
          onChange={handleChange}
        />
      </div>
      <div className="gender">
        <input type="checkbox" name="gender" onChange={handleChange} />
        <p>Male</p>
        <input type="checkbox" name="gender" onChange={handleChange} />
        <p>Female</p>
      </div>
      <div className="addbutton">
        <button onClick={HandleClick}>Add</button>
      </div>
    </>
  );
}
