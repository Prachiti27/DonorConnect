import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

const Dashboard = () => {
  
  const navigate = useNavigate()
  const [profile,setProfile] = useState(null)

  useEffect(()=>{
    const fetchProfile = async () => {
      try{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,{withCredentials:true})
        setProfile(res.data)
      }
      catch(error){
        console.error(error)
      }
    }
    fetchProfile()
  },[])

  if (!profile) {
  return <p className='text-center text-pretty font-semibold mt-10'>Loading...</p>
}

  const handleDeleteProfile = async () => {
  if (!window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
    return;
  }

  try {
    const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/user/delete-profile`, {
      withCredentials: true,
    });

    if (res.data.success) {
      toast.success("Profile deleted successfully.");
      navigate('/')
    } else {
      toast.error(res.data.message || "Failed to delete profile.");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};


  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 mt-25">
      <div className="text-3xl font-bold mb-8 text-primary text-center">
        Hello, {profile.name || "User"} 🩸
      </div>

      <div className='flex flex-col items-center'>
        <div className="bg-white shadow-md rounded-2xl border border-primary p-6 mb-6 w-[320px]">
          <h2 className="text-xl font-semibold text-primary mb-4">Profile Overview</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {profile.name || "User"}</p>
            <p><strong>Blood Group:</strong> {profile.bloodGroup || "N/A"}</p>
            <p><strong>Email:</strong> {profile.email || "N/A"}</p>
            <p><strong>Location:</strong> {profile.location || "N/A"}</p>
            <p><strong>Contact:</strong> {profile.contact || "N/A"}</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-primary text-white font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition" onClick={()=>navigate('/update-profile')}>Edit Profile</button>
            <button className="border border-primary text-primary rounded-xl px-4 py-2 hover:bg-primary/2 transition" onClick={handleDeleteProfile}>Delete Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
