import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input, { SecondInput } from "./Input";
import { intialValues } from "./intialValues";
import { schema } from "./Schema";
import { clinics, doctors } from "./data";
import { Link } from "react-router-dom";

const CustomForm = (props) => {
  ///////////State Management ////////
  const [doctorNames, setDoctorNames] = useState();
  const [specialities, setSpecialities] = useState([]);
  const [time, setTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [intialState, setInitialState] = useState(intialValues);
  const [sortTimings, setSortTimings] = useState(doctors);
  //////////////////
  const getDoctors = (value) => {
    const doctorsList = sortTimings.filter((doc) => {
      return doc.hospital === value;
    });
    const doctorsNames = doctorsList.map((doc) => doc.name);
    setDoctorNames(doctorsNames);
  };

  /////////////////////////
  const getCost = (values, name) => {
    const doctor = sortTimings.find((doc) => {
      return doc.name === name;
    });
    setSpecialities(doctor.speciality);
    setTime(doctor.timings);
    setInitialState({
      ...values,
      doctor: name,
      cost: doctor.cost,
    });
  };

  ///////////////////////

  const sortData = (values) => {
    let doctor = sortTimings.find((doc) => doc.name === values.doctor);
    let doctorIndex = sortTimings.findIndex(
      (doc) => doc.name === values.doctor
    );
    const TotalDoctors = [...sortTimings];
    doctor = {
      ...doctor,
      timings: doctor.timings.filter((time) => time !== values.timings),
    };
    TotalDoctors[doctorIndex] = doctor;
    setSortTimings(TotalDoctors);
  };
  ////////////////////////////////////////////////

  return (
    <div className="content">
      <p className="history">
        <Link to="/history">See Doctor History</Link>
      </p>
      <h2 className="heading">Book your appointment</h2>
      <Formik
        initialValues={intialState}
        validationSchema={schema}
        enableReinitialize={true}
        onSubmit={(values) => {
          setInitialState(values);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            alert("Your appointment successfully added ");
            setInitialState(intialValues);
          }, [1000]);
          sortData(values);
          props.setAppointments((prev) => {
            return [...prev, values];
          });
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <Input name="name" type="text" holder="Your Name" />
            <Input name="email" type="text" holder="Your Email" />
            <Input name="phone" type="text" holder="Your Phone Number" />
            <Input
              name="hospital"
              as="select"
              data={clinics}
              handleChange={handleChange}
              chageData={getDoctors}
              select="Hospital"
            />
            <SecondInput
              name="doctor"
              as="select"
              data={doctorNames}
              handleChange={handleChange}
              getPrice={getCost}
              select="Doctor"
              values={values}
            />
            <Input name="cost" type="text" holder="Cost" />
            <Input
              name="speciality"
              as="select"
              data={specialities}
              handleChange={handleChange}
              chageData={() => {}}
              select="Speciality"
            />
            <Input
              name="timings"
              as="select"
              data={time}
              handleChange={handleChange}
              chageData={() => {}}
              select="Time"
            />
            {loading ? (
              <Loader type="Rings" color="#00BFFF" height={60} width={60} />
            ) : (
              <button type="submit" className="button">
                SUBMIT
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
