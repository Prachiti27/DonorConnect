import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import AuthContext from '../context/AuthContext'


const Login = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const { setIsLoggedIn } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      if (isSignUp) {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/sign-up`,
          { name, email, password },
          { withCredentials: true }
        )
        toast.success('Account created successfully!')
      }

      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/sign-in`, { email, password }, { withCredentials: true })
      setIsLoggedIn(true)
      toast.success('Logged in successfully')
      navigate('/')
    }
    catch (error) {
      console.log(error)
      toast.error('Log In failed')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-sm p-8 space-y-6 bg-white rounded-xl border border-primary shadow-md'>
        <div className='flex flex-col items-center'>
          <Link to={'/'} className='flex items-center mb-2'>
            <img src={Logo} alt='logo' className='w-6 h-6' />
            <span className='text-2xl font-bold text-primary'>DonorConnect</span>
          </Link>

          <h1 className='text-3xl font-bold text-transparent [-webkit-text-stroke:1.5px_#ef4444]'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {
            isSignUp && (
              <div>
                <label htmlFor='name' className='block mb-1 text-sm font-bold text-primary'>
                  Name
                </label>
                <input type='text' onChange={(e) => setName(e.target.value)} id='name' name='name' className='w-full px-4 py-2 border border-primary rounded-lg focus:outline-none' required />
              </div>
            )
          }

          <div>
            <label htmlFor='email' className='block mb-1 text-sm font-bold text-primary'>
              Email
            </label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} id='email' name='email' className='w-full px-4 py-2 border border-primary rounded-lg focus:outline-none' required />
          </div>

          <div>
            <label htmlFor='password'  className='block mb-1 text-sm font-bold text-primary'>
              Password
            </label>
            <input type='password'onChange={(e) => setPassword(e.target.value)} id='password' name='password' className='w-full px-4 py-2 border border-primary rounded-lg focus:outline-none' required />
          </div>

          <button type='submit' className='w-full py-2 mt-4 font-semibold text-white bg-primary rounded-lg hover:bg-primary/80 focus:outline-none hover:cursor-pointer'>
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className='text-sm text-center text-gray-600'>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button type='button' onClick={() => setIsSignUp(!isSignUp)} className='ml-1 font-semibold text-primary hover:underline hover:cursor-pointer'>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
