import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
      <h1 className="text-primary text-3xl md:text-4xl text-center font-bold mb-10">
        Get in Touch with Us
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Contact Information */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-primary/90">
            We’re here to support your life-saving efforts.
          </h2>
          <p className="text-primary/80 mb-6">
            Whether you're a donor, recipient, or simply someone with questions — reach out.
          </p>
          <ul className="space-y-3 text-primary/80">
            <li>📧 <strong>Email:</strong> support@donorconnect.com</li>
            <li>📍 <strong>Location:</strong> Pune, Maharashtra</li>
            <li>📞 <strong>Phone:</strong> +91-98761-43210</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block mb-1 font-medium text-primary/80">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-primary/80">E-mail</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-primary/80">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
