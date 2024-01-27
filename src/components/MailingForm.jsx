import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required(),
});

function MailingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white shadow-md rounded-lg max-w-md mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Thank you for joining our mailing list!
        </h2>
        <p className="text-gray-700">
          You will be the first to know when Stubuddy launches.
        </p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/add-contact`, {
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
          })
          .then((response) => {
            console.log(response.data);
            setSubmitted(true);
          })
          .catch((error) => console.error("Error:", error));

        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="bg-white shadow-md rounded-lg max-w-md mx-auto p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
            Join the Stubuddy Mailing List
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Sign up to be the first to know when Stubuddy launches and get
            exclusive early access.
          </p>
          <Form className="space-y-4 p-8 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <div className="flex flex-col space-y-2">
              <label htmlFor="first_name" className="font-medium text-gray-700">
                First Name
              </label>
              <Field
                name="first_name"
                type="text"
                className="p-2 border rounded text-gray-700"
                placeholder="John"
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="text-red-500 text-sm"
              />

              <label htmlFor="last_name" className="font-medium text-gray-700">
                Last Name
              </label>
              <Field
                name="last_name"
                type="text"
                className="p-2 border rounded text-gray-700"
                placeholder="Doe"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="p-2 border rounded text-gray-700"
                placeholder="john.doe@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default MailingForm;
