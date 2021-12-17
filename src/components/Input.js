import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  return (
    <div className="input">
      {props.as === "select" ? (
        <Field
          type={props.type}
          name={props.name}
          placeholder={props.holder}
          className="field"
          as="select"
          onChange={(e) => {
            props.handleChange(e);
            props.chageData(e.target.value);
          }}
        >
          {props.name === "timings" && props.data.length === 0 ? (
            <option>No appointments</option>
          ) : (
            <option>Select {props.select}</option>
          )}

          {props.data?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          type={props.type}
          name={props.name}
          placeholder={props.holder}
          className="field"
        />
      )}
      <ErrorMessage name={props.name} component="div" className="error" />
    </div>
  );
};

export default Input;

export const SecondInput = (props) => {
  return (
    <div className="input">
      <Field
        type={props.type}
        name={props.name}
        placeholder={props.holder}
        className="field"
        as="select"
        onChange={(e) => {
          props.handleChange(e);
          props.getPrice(props.values, e.target.value);
        }}
      >
        <option>Select {props.select}</option>
        {props.data?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </Field>

      <ErrorMessage name={props.name} component="div" className="error" />
    </div>
  );
};
