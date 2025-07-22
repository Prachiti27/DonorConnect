import axios from 'axios'

const getCoordinatesFromAddress = async (address) => {
    const userAgent = `DonorConnect (${process.env.REACT_APP_NOMINATIM_USER_AGENT_EMAIL})`
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`

    const response = await axios.get(url, {
        headers: {
            'User-Agent': userAgent
        }
    })

    if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0]
        return { lat: parseFloat(lat), lng: parseFloat(lon) }
    }
    else {
        throw new Error('Could not find coordinates for the given address')
    }
}

export default getCoordinatesFromAddress