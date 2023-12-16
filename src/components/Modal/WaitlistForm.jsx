import React from "react";

const WaitlistForm = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., send to server)
    closeModal();
  };

  return (
    <div>
      <h2>Join Waitlist</h2>
      <p>Enter your email to join the waitlist:</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WaitlistForm;
