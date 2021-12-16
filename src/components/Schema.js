import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  phone: Yup.string()
    .required("phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  hospital: Yup.string().required("Hospital is required"),
  doctor: Yup.string().required("Doctor is required"),
  cost: Yup.string().required("Cost is required"),
  speciality: Yup.string().required("Select Speciality"),
  timings: Yup.string().required("Select Time"),
});
