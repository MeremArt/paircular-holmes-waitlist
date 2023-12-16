import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Modal.css"; // Import the styles

Modal.setAppElement("#root"); // Set the root element for accessibility

const ModalForm = ({ isOpen, onRequestClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values) => {
    // Add your form submission logic here
    console.log("Form submitted with values:", values);
    setIsSubmitted(true);
    // You can perform additional actions here, such as sending data to a server
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
              {/* <br /> */}
              {/* <div>
                <Field
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Enter phone number"
                />
                <ErrorMessage name="number" component="div" />
              </div> */}
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </Modal>
  );
};

export default ModalForm;
