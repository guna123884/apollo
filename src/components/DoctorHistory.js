import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./DoctrHistory.css";

const DoctorHistory = (props) => {
  //   console.log("data", props);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [list, setList] = useState([]);
  const changeHandler = () => {
    const filteredList = props.appoinments.filter((doc) => doc.doctor === name);
    filteredList.length === 0
      ? setMessage("Doctor name not found")
      : setMessage("");
    setList(filteredList);
  };

  return (
    <div className="appointment">
      <p className="history">
        <Link to="/">Book Appointment</Link>
      </p>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Entet Doctor Name"
        className="field name"
      />
      <button className="button" onClick={changeHandler}>
        SUBMIT
      </button>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <div className="list">
        {list.map((doc, i) => (
          <div className="list-item" key={i}>
            <p>Doctor : {doc.doctor}</p>
            <p>Patient Name: {doc.name} </p>
            <p>Treatment goes on : {doc.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorHistory;
