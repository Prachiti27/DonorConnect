import React, { useState } from 'react'

const DonorRegistration = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    bloodGroup: "",
    location: "",
    lastDonation: "",
    availablility: "yes"
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='items-center'>
      <div className='max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10'>
        <h2 className='text-2xl font-bold text-primary mb-6 text-center'>
          Donor Registration
        </h2>
        <form onSubmit={handleSubmit} className='sapce-y-4'>
          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Full Name
            </label>
            <input
              type='text'
              name='fullName'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary"
              value={formData.fullName}
              required
              onChange={handleChange}
            />
          </div>

          <div className='mt-5'>
            <label className='block mb-1 text-sm font-medium text-primary/75'>
              Gender
            </label>
            <select
              name='gender'
              required
              value={formData.gender}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50 appearance-none bg-[url('data:image/svg+xml;utf8,<svg fill=\'red\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem_1.25rem]"
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className='mt-5'>
            <label className="block mb-1 text-sm font-medium text-primary/75">
              Blood Group
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

          <div className='mt-5'>
            <label className="block mb-1 text-sm font-medium text-primary/75">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="w-full px-4 py-2 border rounded-lg border-primary focus:outline-none"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mt-5'>
            <label className="block mb-1 text-sm font-medium text-primary/75 placeholder:text-primary/50">
              Last Donation Date
            </label>
            <input
              type="date"
              name="lastDonationDate"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black placeholder:text-primary/50"
              value={formData.lastDonation}
              onChange={handleChange}
            />
          </div>

          <div className='mt-5'>
            <label className="block mb-1 text-sm font-medium text-primary/75">
              Are you available to donate?
            </label>
            <select
              name="availability"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none border-primary text-black appearance-none placeholder:text-primary/50 bg-[url('data:image/svg+xml;utf8,<svg fill=\'red\' height=\'20\' viewBox=\'0 0 24 24\' width=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem_1.25rem]"
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full font-semibold bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default DonorRegistration
