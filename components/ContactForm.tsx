import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const formData = { name, email, phoneNumber, message };

    // Send the form data to the API route
    const response = await fetch('/api/Contact', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');

      openPopup();
    }
  };

  function openPopup() {
    let popup = document.getElementById("popup")
    popup?.classList.add("open-popup");
  }

  function closePopup() {
    let popup = document.getElementById("popup")
    popup?.classList.remove("open-popup");
  }



  return (
    <div className="contact-container">
        <div className="popup" id="popup">
          <img src="tick.png"/>
          <h2>Thank You!</h2>
          <p className="check">Your details has been successfuly submitted. Thanks!</p>
          <button type="button" className="popup-button" onClick={closePopup}>OK</button>
        </div>
      
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] shadow-md">Contact</h1>
      
      <form dir="rtl" onSubmit={submitHandler} className="contact-form">
        <label htmlFor="name">שם:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">אימייל:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="phone">טלפון:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <label htmlFor="message">הודעה:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <button className="button" type="submit">שליחה</button>
      </form>
    </div>
  );
}
