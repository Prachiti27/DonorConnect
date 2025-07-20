import React from 'react'
import Faqs from '../components/Faqs'
import { useNavigate } from 'react-router-dom'
import { Book, Settings, Target } from 'lucide-react'

const About = () => {

  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-20 py-12 space-y-16">
      <h1 className="text-center text-4xl font-bold text-primary">About DonorConnect</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 px-6 md:px-20 py-12'>
        <section className='border border-primary rounded-md w-[300px] h-[250px] hover:bg-primary/2'>
          <div className="flex flex-row gap-2 justify-center text-2xl font-semibold text-primary/90 mb-2 text-center mt-4">
            <Target className='mt-1' />
            Our Mission
          </div>
          <p className="text-primary/80 leading-relaxed text-center px-6">
            To simplify and encourage blood donation by connecting life-saving donors with those in urgent need —
            all through the power of technology and community.
          </p>
        </section>

        <section className='border border-primary rounded-md w-[300px] h-[250px] hover:bg-primary/2'>
          <h2 className="flex flex-row gap-2 justify-center text-2xl font-semibold text-primary/90 mb-2 text-center mt-4">
            <Book className='mt-1' />
            Our Story
          </h2>
          <p className="text-primary/80 leading-relaxed text-center px-6">
            DonorConnect was inspired by a personal struggle to find a blood donor. We created this platform to connect donors and recipients in real-time — making blood donation faster, easier, and more reliable.
          </p>
        </section>

        <section className='border border-primary rounded-md w-[300px] h-[250px] hover:bg-primary/2'>
          <h2 className="flex flex-row gap-2 justify-center text-2xl font-semibold text-primary/90 mb-4 text-center mt-4">
            <Settings className='mt-1' />
            How It Works
          </h2>
          <ul className="space-y-2 list-decimal list-inside text-primary/80 text-center px-6">
            <li>Register as a donor or submit a recipient request</li>
            <li>Use map search to find nearby matches</li>
            <li>Connect directly and schedule donation</li>
          </ul>
        </section>
      </div>

      <section className='text-center'>
        <h2 className="text-3xl font-bold text-primary/90 mb-4">Our Values</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-primary/80 text-xl hover:text-primary hover:cursor-pointer font-normal">
          <li>Trust</li>
          <li>Transparency</li>
          <li>Community</li>
          <li>Safety</li>
        </ul>
      </section>

      <section>
        <Faqs />
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-primary/90 mb-4">Ready to Save a Life?</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <button onClick={() => navigate('/donor-registration')} className="bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-red-700 transition">
            Become a Donor
          </button>
          <button onClick={() => navigate('/map-search')} className="border border-primary text-primary py-2 px-6 rounded-md font-semibold hover:bg-red-50 transition">
            Find a Donor
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
