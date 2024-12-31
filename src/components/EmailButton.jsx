import React from 'react';

function EmailButton() {
  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'recipient@example.com',
          subject: 'Appointment Confirmation',
          body: 'Your appointment is confirmed.',
        }),
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={sendEmail}>Send Email</button>;
}

export default EmailButton;
