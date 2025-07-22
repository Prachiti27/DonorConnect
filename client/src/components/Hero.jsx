import HeroImage from '../assets/hero.webp'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()

    const handleFindDonor = () => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/sign-in')
        } else {
            navigate('/map-search')
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10'>
                <div className='text-left md:w-1/2'>
                    <h1 className='text-3xl md:text-5xl font-bold text-red-600 leading-tight'>
                        Because every<br />
                        drop counts -<br />
                        Connect.Save.Donate
                    </h1>
                </div>
                <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center'>
                    <img src={HeroImage} alt='donation illustration' className="w-full max-w-md" />
                </div>
            </div>
            <p className='text-primary/90 text-center'>
                A web-based platform that simplifies blood donation by allowing recipients to search, match, and connect with nearby donors instantly—securely and reliably.
            </p>
            <div className='flex justify-center gap-15 mt-10'>
                <button
                    onClick={() => navigate('/donor-registration')}
                    className='bg-primary text-white font-semibold py-2 px-5 rounded-sm hover:bg-primary/80 hover:cursor-pointer'
                >
                    Become a Donor
                </button>

                <button
                    onClick={handleFindDonor}
                    className='bg-transparent border border-primary font-semibold text-primary py-2 px-5 rounded-sm hidden md:inline-flex hover:bg-primary/2 hover:cursor-pointer'
                >
                    Find a Donor
                </button>
            </div>
        </div>
    )
}

export default Hero
