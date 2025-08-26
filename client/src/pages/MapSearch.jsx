import React, { useState } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const MapSearch = () => {
  const [bloodGroup, setBloodGroup] = useState('')
  const [donors, setDonors] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const fetchDonors = async () => {
    if (!bloodGroup) return

    setLoading(true)
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/search/donors?bloodGroup=${encodeURIComponent(bloodGroup)}`)
      setDonors(res.data)
    } catch (error) {
      console.log('Error fetching donors : ', error)
    }
    setLoading(false)
  }

  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  })

  const handleContactClick = async (donorId) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/contact-donor`,
        { donorId },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (res.data.redirect) {
        toast.info("Please register as recipient first.")
        navigate("/recipient-registration")
      } else if (res.data.success) {
        toast.success("Email sent to donor!")
        navigate("/")
      } else {
        toast.error("Failed to send email")
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong")
    }
  }


  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center">
        Search Donors by Blood Group
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <select
          className="border border-gray-500 rounded-md px-5 py-3 focus:outline-none focus:ring-2 text-lg min-w-[250px]"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
            <option value={bg} key={bg}>
              {bg}
            </option>
          ))}
        </select>

        <button
          className={`px-8 py-3 rounded-md font-semibold text-white text-lg transition ${!bloodGroup || loading
            ? 'bg-primary/50 cursor-not-allowed'
            : 'bg-primary hover:bg-primary-dark'
            }`}
          onClick={fetchDonors}
          disabled={!bloodGroup || loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 max-h-[600px] overflow-y-auto px-2">
          {donors.length === 0 && (
            <p className="text-gray-500 text-center mt-20 text-lg">No donors found.</p>
          )}
          {donors.map((donor) => (
            <div
              key={donor._id}
              className="mx-auto max-w-sm mb-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center"
            >
              <h3 className="font-semibold text-2xl text-gray-900 mb-2">{donor.name}</h3>
              <p className="text-md text-gray-700 mb-1">
                <span className="font-medium">Blood Group:</span> {donor.bloodGroup}
              </p>
              <p className="text-md text-gray-700 mb-1">
                <span className="font-medium">Gender:</span> {donor.gender}
              </p>
              <p className="text-md text-gray-700 mb-4">
                <span className="font-medium">Location:</span> {donor.location}
              </p>
              <button
                onClick={() => handleContactClick(donor._id)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-semibold transition text-lg"
              >
                Contact
              </button>
            </div>
          ))}
        </div>
        <div className="md:w-2/3 h-[600px] rounded-md overflow-hidden shadow-lg border border-gray-200">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {donors
              .filter((donor) => donor.coordinates?.lat && donor.coordinates?.lng)
              .map((donor) => (
                <Marker
                  key={donor._id}
                  position={[donor.coordinates.lat, donor.coordinates.lng]}
                >
                  <Popup>
                    <div className="max-w-xs">
                      <h3 className="font-semibold text-lg">{donor.name}</h3>
                      <p className="text-sm">Blood Group: {donor.bloodGroup}</p>
                      <p className="text-sm">Location: {donor.location}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default MapSearch
