import React, { useState } from "react";

const RecipientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    bloodGroup: "",
    location: "",
    urgency: "normal",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit to backend
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Recipient Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Gender */}
        <div>
          <label className="block mb-1 text-sm font-medium text-primary/75">
            Gender
          </label>
          <select
            name="gender"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black appearance-none placeholder:text-primary/50 bg-[url('data:image/svg+xml;utf8,<svg fill=\'red\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem_1.25rem]"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Blood Group */}
        <div>
          <label className="block mb-1 text-sm font-medium text-primary/75">
            Blood Group Needed
          </label>
          <select
            name="bloodGroup"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black appearance-none placeholder:text-primary/50 bg-[url('data:image/svg+xml;utf8,<svg fill=\'red\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem_1.25rem]"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 text-sm font-medium text-primary/75">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Urgency */}
        <div>
          <label className="block mb-1 text-sm font-medium text-primary/75">
            Urgency Level
          </label>
          <select
            name="urgency"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black appearance-none placeholder:text-primary/50 bg-[url('data:image/svg+xml;utf8,<svg fill=\'red\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem_1.25rem]"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="critical">Critical</option>
          </select>
        </div>

         {/* Contact */}
        <div>
          <label className="block mb-1 text-sm font-medium text-primary/75">
            Contact No
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full font-semibold bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipientForm;
