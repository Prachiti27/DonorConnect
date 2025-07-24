import React, { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const UpdateProfile = () => {
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getUserData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, {headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }})

      const user = res.data?.user || {}
      const donor = res.data?.donor || {}
      const recipient = res.data?.recipient || {}

      setFormData({
        name: user.name || '',
        email: user.email || '',
        bloodGroup: donor.bloodGroup || recipient.bloodGroup || '',
        location: donor.location || recipient.location || '',
        contact: donor.contact || recipient.contact || '',
      });

      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load user data.')
    }
  };

  useEffect(() => {
    getUserData();
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/user/update-profile`,
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success('Profile updated successfully!');
        navigate('/dashboard')
      } else {
        toast.error(res.data.message || 'Update failed.');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong!');
    }
  };

  if (loading || !formData) return <div>Loading...</div>

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl border border-red-600 shadow-md mt-25">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Update Profile
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 text-primary/80 font-semibold">
            Name
          </label>
          <input
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
            <option value="" disabled>Select Blood Group</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <option key={group} value={group}>{group}</option>
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
          disabled={loading}
          className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
