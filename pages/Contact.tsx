import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Your EmailJS credentials
  const SERVICE_ID = 'service_nrtkgck';
  const TEMPLATE_ID = 'template_b1391e3';
  const PUBLIC_KEY = '6B39GrANe3KTTGYGH';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
      {submitted ? (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
          <p className="text-slate-500">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
