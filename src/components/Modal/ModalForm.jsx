import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Modal.css"; // Import the styles

Modal.setAppElement("#root"); // Set the root element for accessibility

const ModalForm = ({ isOpen, onRequestClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    try {
      // Perform a POST request to your API
      const response = await fetch(
        "https://paircular-server-vdwt.onrender.com/api/v1/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
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
            <h2 className="hold">Waitlist</h2>
          </center>

          <Formik
            initialValues={{ name: "", email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
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
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </Modal>
  );
};

export default ModalForm;
