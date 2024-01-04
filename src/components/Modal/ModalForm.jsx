// ... (existing imports)

import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios"; // Import axios
import "./Modal.css"; // Import the styles

Modal.setAppElement("#root"); // Set the root element for accessibility

const ModalForm = ({ isOpen, onRequestClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    try {
      // Perform a POST request to your API using axios
      const response = await axios.post(
        "https://paircular-server-vdwt.onrender.com/api/v1/submit",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the request was successful (status code 2xx)
      if (response.status === 200) {
        console.log("Form data sent successfully");
        setIsSubmitted(true);
      } else {
        // Handle errors or show an error message
        console.error("Error sending form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={resetForm}
      contentLabel="Modal Form"
      className="Modal" // Apply the modal styles
    >
      {isSubmitted ? (
        <div>
          <center>
            <h2 className="hold">Thank You!</h2>
          </center>
        </div>
      ) : (
        <div>
          <center>
            <h2 className="hold">Early Access</h2>
          </center>

          <Formik
            initialValues={{
              name: "",
              email: "",
              profession: "",
              location: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              }
              if (!values.profession) {
                errors.profession = "Required";
              }
              if (!values.location) {
                errors.location = "Required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name..."
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <br />
              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <br />
              <div>
                <Field
                  as="select"
                  id="profession"
                  name="profession"
                  className="animal"
                >
                  <option value="" label="Select Occupation" />
                  <option value="developer" label="Developer" />
                  <option value="designer" label="Designer" />
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="profession" component="div" />
              </div>
              <br />
              <div>
                <Field
                  as="select"
                  id="location"
                  name="location"
                  className="animal"
                >
                  <option value="" label="Select City" />
                  <option value="city1" label="City 1" />
                  <option value="city2" label="City 2" />
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="location" component="div" />
              </div>
              <br />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </Modal>
  );
};

export default ModalForm;
