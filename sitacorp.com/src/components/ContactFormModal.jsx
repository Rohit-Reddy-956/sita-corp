// ContactFormModal.jsx
import { useState } from 'react';

const ContactFormModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbykl3WiN5ZmsK4N7RKKTEZ-t2foiXm4tw0ZA34-Kh4Sx198Til89f1fm0RAlMilJNXS/exec",
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Form submission failed");

      alert("Your response has been recorded!");
      onClose();
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-lg relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
