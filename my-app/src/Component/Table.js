import React, { useEffect, useState } from "react";
import data from "../MOCK_DATA.json";
import NewCandidate from "./NewCandidate";
import { tabledata } from "./NewCandidate";

export default function () {
  //   const [tablesdata, settablesdata] = useState(tabledata);
  //   console.log(tabledata);

  const [filter, setfilter] = useState("");

  //   const newarr = tabledata.filter((e) => {
  //     e.filter.First_Name.includes(filter.First_name);
  //   });

  return (
    <>
      <div className="header">
        <div className="gender">
          <input type="checkbox" name="gender" />
          <p>Male</p>
          <input type="checkbox" name="gender" />
          <p>Female</p>
        </div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
          placeholder="search"
        />
        {filter}
      </div>

      <NewCandidate />
    </>
  );
}
