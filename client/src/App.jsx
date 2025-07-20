import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DonorRegistration from './pages/DonorRegistration'
import Login from './pages/Login'
import About from './pages/About'
import RecipientForm from './pages/RecipientForm'
import MapSearch from './pages/MapSearch'
import Dashboard from './pages/Dashboard'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/donor-registration' element={<DonorRegistration/>}/>
      <Route path='/sign-in' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recipient-form' element={<RecipientForm/>}/>
      <Route path='/map-search' element={<MapSearch/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  )
}

export default App
