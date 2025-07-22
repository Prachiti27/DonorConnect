import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DonorRegistration from './pages/DonorRegistration'
import Login from './pages/Login'
import About from './pages/About'
import RecipientForm from './pages/RecipientForm'
import MapSearch from './pages/MapSearch'
import Dashboard from './pages/Dashboard'
import ContactPage from './pages/ContactPage'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/donor-registration'
          element={
            <ProtectedRoute>
              <DonorRegistration />
            </ProtectedRoute>
          }
        />
        <Route
          path='/recipient-registration'
          element={
            <ProtectedRoute>
              <RecipientForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/map-search' element={<MapSearch />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route
          path='/sign-in'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
