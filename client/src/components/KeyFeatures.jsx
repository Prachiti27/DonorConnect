import User from '../assets/user.png'
import RegistrationForm from '../assets/reg_form.png'
import Contact from '../assets/contact.jpg'
import Dashboard from '../assets/dashboard.png'
import Map from '../assets/map.png'

const features = [
    {
        icon: User,
        title: "User Authentication",
        description: "Secure login and registration system with role selection for Donor or Recipient. This ensures controlled access to features based on the selected role"
    },
    {
        icon: RegistrationForm,
        title: "Donor Registration Form",
        description: "A detailed form where donors can register by entering information such as name, blood group, location, availability status, and last donation date."
    },
    {
        icon: RegistrationForm,
        title: "Recipient Registration Form",
        description: "Allows recipients to create a request by specifying the required blood group, urgency level, and location."
    },
    {
        icon: Map,
        title: "Map-based Search",
        description: "A geolocation-enabled feature that shows nearby donors on a map based on blood group compatibility and availability."
    },
    {
        icon: Contact,
        title: "Email Alerts",
        description: "Once a recipient sends a request, the selected donor receives a notification via email with all the relevant details."
    },
    {
        icon: Dashboard,
        title: "Dashboard",
        description: "A role-based dashboard where donors manage availability and donation history, while recipients track and manage their blood requests."
    }
]

const KeyFeatures = () => {
    return (
        <div className='flex flex-col mt-15 px-6 md:px-20 py-10'>
            <h1 className='text-primary text-3xl text-center font-bold'>Key Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 px-6 md:px-20 py-10'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='w-[320px] h-[220px] flex flex-col gap-1 mt-5 px-5 py-2 items-center border border-primary rounded-xl hover:bg-primary/2 hover:cursor-pointer shadow-xl'>
                            <img src={feature.icon} alt='feature-icon' className='w-6 h-6 mt-3'/>
                            <h2 className='text-primary font-semibold text-center mt-1'>{feature.title}</h2>
                            <p className='text-primary/75 text-center mt-1'>{feature.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default KeyFeatures
