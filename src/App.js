import React, { useState } from "react";
import "./App.css";
import CustomForm from "./components/customForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorHistory from "./components/DoctorHistory";

function App() {
  const [appoinments, setAppointments] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<CustomForm setAppointments={setAppointments} />}
          />
          <Route
            path="/history"
            element={<DoctorHistory appoinments={appoinments} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
