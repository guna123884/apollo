import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input, { SecondInput } from "./components/Input";
import { intialValues } from "./components/intialValues";
import { schema } from "./components/Schema";
import { clinics, doctors } from "./components/data";
import { useState } from "react";
import Loader from "react-loader-spinner";

function App() {
  const [doctorNames, setDoctorNames] = useState();
  const [specialities, setSpecialities] = useState([]);
  const [time, setTime] = useState([]);
  const [loading, setLoading] = useState(false);

  const [intialState, setInitialState] = useState(intialValues);

  const getDoctors = (value) => {
    const doctorsList = doctors.filter((doc) => {
      return doc.hospital === value;
    });
    const doctorsNames = doctorsList.map((doc) => doc.name);
    setDoctorNames(doctorsNames);
  };

  const getCost = (values, name) => {
    const doctor = doctors.find((doc) => {
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

  return (
    <div className="app">
      <div className="content">
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
            }, [5000]);
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
                select="Speciality"
              />
              <Input
                name="timings"
                as="select"
                data={time}
                handleChange={handleChange}
                select="Time"
              />
              {loading ? (
                <Loader type="Rings" color="#00BFFF" height={100} width={100} />
              ) : (
                <button type="submit" className="button">
                  SUBMIT
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
