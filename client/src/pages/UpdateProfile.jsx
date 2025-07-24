import React, { useState, useEffect } from "react";

const UpdateProfile = ({ initialData, onSubmit }) => {

  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    email: "",
    location: "",
    contact: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        bloodGroup: initialData.bloodGroup || "",
        email: initialData.email || "",
        location: initialData.location || "",
        contact: initialData.contact || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl border border-red-600 shadow-md mt-25">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Update Donor Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 text-primary/80 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="bloodGroup" className="block mb-1 text-primary/80 font-semibold">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-primary/80 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block mb-1 text-primary/80 font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className="block mb-1 text-primary/80 font-semibold">
            Contact No
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-red-600 rounded-lg focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
