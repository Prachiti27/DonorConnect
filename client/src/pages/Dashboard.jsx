import React from 'react';
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const requestCount = 5
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 mt-25">
      <div className="text-3xl font-bold mb-8 text-primary text-center">
        Hello, Prachiti Kitey 🩸
      </div>

      <div className='flex flex-col items-center'>
        <div className="bg-white shadow-md rounded-2xl border border-primary p-6 mb-6 w-[320px]">
          <h2 className="text-xl font-semibold text-primary mb-4">Profile Overview</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> Prachiti Kitey</p>
            <p><strong>Blood Group:</strong> B+</p>
            <p><strong>Email:</strong> prachiti@example.com</p>
            <p><strong>Location:</strong> Nagpur, Maharashtra</p>
            <p><strong>Contact:</strong> +91 98765-00000</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-primary text-white font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition" onClick={()=>navigate('/update-profile')}>Edit Profile</button>
            <button className="border border-primary text-primary rounded-xl px-4 py-2 hover:bg-primary/2 transition">Delete Profile</button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl border border-primary p-6 w-[320px]">
          <h2 className="text-xl font-semibold text-primary mb-4">Request Activity</h2>
          <p className="text-sm"><strong>Number of Contact Requests Received:</strong> {requestCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
