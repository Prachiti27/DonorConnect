import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const DonorRegistration = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    contact: '',
    gender: '',
    bloodGroup: '',
    location: '',
    lastDonationDate: '',
    availability: 'yes',
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/sign-in');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = e.target.contact?.value
    const gender = e.target.gender?.value
    const bloodGroup = e.target.bloodGroup?.value
    const lastDonationDate = e.target.lastDonationDate?.value
    const availability = e.target.availability?.value
    const location = e.target.location?.value

    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/register/donor`

    const payload = { contact, gender, bloodGroup, lastDonationDate, availability, location }

    try {
      const res = await axios.post(endpoint, payload)
      console.log('Response:',res)

      toast.success("Donor Registered sucessfully.")
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong!')
    }
  };

  return (
    <div className='items-center'>
      <div className='max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10'>
        <h2 className='text-2xl font-bold text-primary mb-6 text-center'>
          Donor Registration
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Gender */}
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Gender
            </label>
            <select
              name='gender'
              required
              value={formData.gender}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50 appearance-none'
              onChange={handleChange}
            >
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

          {/* Blood Group */}
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Blood Group
            </label>
            <select
              name='bloodGroup'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50 appearance-none'
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value=''>Select Blood Group</option>
              <option value='A+'>A+</option>
              <option value='A-'>A-</option>
              <option value='B+'>B+</option>
              <option value='B-'>B-</option>
              <option value='O+'>O+</option>
              <option value='O-'>O-</option>
              <option value='AB+'>AB+</option>
              <option value='AB-'>AB-</option>
            </select>
          </div>

          {/* Location */}
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Location
            </label>
            <input
              type='text'
              name='location'
              className='w-full px-4 py-2 border rounded-lg border-primary focus:outline-none'
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Donation */}
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Last Donation Date
            </label>
            <input
              type='date'
              name='lastDonationDate'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50 appearance-none'
              value={formData.lastDonationDate}
              onChange={handleChange}
            />
          </div>

          {/* Availability */}
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Are you available to donate?
            </label>
            <select
              name='availability'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50 appearance-none'
              value={formData.availability}
              onChange={handleChange}
              required
            >
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-primary/75">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full font-semibold bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition mt-5'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;
