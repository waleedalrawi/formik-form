import React from "react";
import "./App.css";
import "./customStyles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <Formik
      initialValues={{
        emailField: "",
        pswField: "",
      }}
      onSubmit={(values) => {
        alert("Login Successful");
      }}
      validationSchema={Yup.object({
        emailField: Yup.string()
          .max(18, "Must be 20 Characters or less")
          .email("Username should be an email")
          .required("Field Required"),
        pswField: Yup.string()
          .max(18, "Must be 20 Characters or less")
          .required("Field Required"),
      })}
    >
      <Form>
        <label htmlFor="emailField"> Username: </label>
        <Field
          id="emailField"
          name="emailField"
          type="email"
          placeHolder="john@gmail.com"
        />
        <br />
        <ErrorMessage
          name="emailField"
          component="div"
          id="emailError"
          className="error"
        />

        <label htmlFor="pswField"> Password: </label>
        <Field
          id="pswField"
          name="pswField"
          type="password"
          placeHolder="password"
        />
        <br />
        <ErrorMessage
          name="pswField"
          component="div"
          id="pswError"
          className="error"
        />

        <br />
        <button type="submit"> LOGIN </button>
      </Form>
    </Formik>
  );
}
//can also define custom resuseable input primitive components
//see https://formik.org/docs/tutorial#leveraging-react-context

export default App;
