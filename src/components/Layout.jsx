import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const [spacing, setSpacing] = useState(300)

    const location = useLocation()
    console.log(location.pathname)
    
    const menus = [
        {
            icon: <i className="ri-dashboard-2-line mr-3 text-xl"></i>,
            label: 'Dashboard',
            link: '/dashboard'
        },
        {
            icon: <i className="ri-macbook-line mr-3 text-xl"></i>,
            label: 'Device',
            link: '/device'
        },
        {
            icon: <i className="ri-nurse-line mr-3 text-xl"></i>,
            label: 'Doctor',
            link: '/doctor'
        },
        {
            icon: <i className="ri-hospital-line mr-3 text-xl"></i>,
            label: 'Patient',
            link: '/patient'
        },
        {
            icon: <i className="ri-calendar-schedule-line mr-3 text-xl"></i>,
            label: 'Doctor Schedule',
            link: '/doctorschedule'
        },
        {
            icon: <i className="ri-calendar-check-line mr-3 text-xl"></i>,
            label: 'Patient Appointment',
            link: '/patientappointment'
        },
        {
            icon: <i className="ri-file-copy-2-line mr-3 text-xl"></i>,
            label: 'Patient Case Studies',
            link: '/patientcasestudies'
        },
        {
            icon: <i className="ri-file-list-3-line mr-3 text-xl"></i>,
            label: 'Prescription',
            link: '/prescription'
        }
    ]

  return (
    <div className="bg-[#E9E7EF] min-h-screen">
        <aside className="bg-white h-full fixed top-0 left-0 shadow overflow-hidden"
            style={{
                width: spacing,
                transition: '300ms'
            }}
        >
            <div className="p-3 gap-2">
                <img 
                    src="/public/images/logo.png"
                    className={`w-48 ml-6 mb-4 justify-center items-center ${spacing === 300 ? 'ml-3' : 'ml-0'}`}
                />
                <div className="flex items-center ml-3 gap-6">
                    <img 
                        src="/public/images/admin_image.jpg"
                        className="w-10 rounded-full"
                    />
                    <h1 className="text-xl font-semibold">Super Admin</h1>
                </div>
            </div>

            <div className="p-4 flex flex-col -mt-3 gap-2">
                {
                    menus.map((item, index) => (
                        <Link
                            to={item.link} 
                            key={index}
                            className="flex items-center px-4 p-2 rounded-md"
                            style={{
                                backgroundColor: (location.pathname === item.link ? '#0ea5e9' : null),
                                color: (location.pathname === item.link ? 'white' : null)
                            }}
                            >
                                {item.icon}
                                {
                                    spacing === 300 &&
                                    <label className="text-md">{item.label}</label>
                                }
                        </Link>
                    ))
                }
            </div>
        </aside>

        <section
            style={{
                marginLeft: spacing,
                transition: '300ms'
            }}
        >
            <nav className="bg-white p-6 shadow flex justify-between">
                <div className="space-x-2">
                    <button 
                        className="w-10 h-10 rounded-full hover:bg-gray-100"
                        onClick={() => setSpacing(spacing === 300 ? 85 : 300)}
                    >
                        <i className="ri-menu-2-line text-xl"></i>
                    </button>
                        <i className="ri-global-line"></i>
                        <Link to="/dashboard">Go to Website</Link>
                </div>

                <div className="flex space-x-4">
                    <button>
                        <i className="ri-chat-1-line mr-2"></i>
                        <label>Chat</label>
                    </button>

                    <button>
                        <i className="ri-hospital-line mr-2"></i>
                        <label>Health ease</label>
                    </button>

                    <button className="flex items-center gap-2">
                        <img 
                            src="/public/images/flag.png" 
                            className="w-6 flex"
                        />
                        <label>EN</label>
                    </button>

                </div>

            </nav>

            <div className="p-6">
                {children}
            </div>

            <footer className="bg-white p-6 rounded-md m-6">
                <div className="flex items-center w-fit mx-auto text-gray-600">
                    <i className="ri-copyright-line"></i>
                    <p>CodingOtt | All Rights Reserved</p>
                </div>
            </footer>
        </section>
      
    </div>
  )
}


export default Layout;

/*
1- button --> button is touch friendly
2- a ---> click friendly
*/
