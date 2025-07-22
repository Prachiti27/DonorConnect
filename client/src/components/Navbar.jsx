import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  console.log(isLoggedIn)

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className='flex px-6 md:px-20 py-10 justify-between'>
      <div className='flex items-center'>
        <img src={Logo} alt='logo' className='w-10 h-10' />
        <NavLink to='/'>
          <p className='text-primary font-bold text-xl'>DonorConnect</p>
        </NavLink>
      </div>

      <div className='flex justify-between gap-4'>
        {isLoggedIn ? (
          <>
          <button
            onClick={handleLogout}
            className='bg-primary text-white font-semibold py-2 px-5 rounded-sm hover:bg-primary/70'
          >
            Logout
          </button>
          <button
              onClick={() => navigate('/dashboard')}
              className='bg-transparent border border-primary font-semibold text-primary py-2 px-5 rounded-sm hidden md:inline-flex hover:bg-primary/20'
            >
              Dashboard
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/sign-in')}
              className='bg-primary text-white font-semibold py-2 px-5 rounded-sm hover:bg-primary/80'
            >
              Login
            </button>
            <button
              onClick={() => navigate('/sign-in')}
              className='bg-transparent border border-primary font-semibold text-primary py-2 px-5 rounded-sm hidden md:inline-flex hover:bg-primary/20'
            >
              SignUp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
