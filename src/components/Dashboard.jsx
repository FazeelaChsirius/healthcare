import { Link, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useState } from "react";

const Dashboard = () => {

  const [active, setActive] = useState(0)
  const location = useLocation()

  const totalDoctors = 400;
  const limit = 12;
  const noOfPagination = Math.round(totalDoctors/limit);

  const handleNext = () => {
    if(active < noOfPagination - 1) {
      setActive((prev) => prev + 1)
    }
  };

  const handlePrevious = () => {
    if(active > 0) {
      setActive((prev) => prev - 1)
    }
  }

  const doctors = [
    {
      id: 1,
      doctorName: 'Jhon Smith',
      weekday: 'Monday',
      visitingTime: '00:00 - 23:59',
      status: 'Active'
    },
    {
      id: 2,
      doctorName: 'Jhon Smith',
      weekday: 'Tuesday',
      visitingTime: '00:00 - 17:30',
      status: 'Active'
    },
    {
      id: 3,
      doctorName: 'Jhon Smith',
      weekday: 'Wednesday',
      visitingTime: '00:00 - 10:15',
      status: 'Active'
    },
    {
      id: 4,
      doctorName: 'Jhon Smith',
      weekday: 'Thursday',
      visitingTime: '00:00 - 05:20',
      status: 'Active'
    },
    {
      id: 5,
      doctorName: 'Jhon Smith',
      weekday: 'Friday',
      visitingTime: '00:00 - 23:59',
      status: 'Active'
    },
    {
      id: 6,
      doctorName: 'Jhon Smith',
      weekday: 'Saturday',
      visitingTime: '00:00 - 22:30',
      status: 'Active'
    }
  ]

  return (
    <Layout>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <button className="bg-[#0ea5e9] text-white px-3 p-2 rounded-md">
          <i className="ri-add-fill mr-1"></i>
            Add Patient
          </button>
          
          <Link 
            to='/dashboard'
            className="text-lg font-semibold capitalize"
          >
              {location.pathname.slice(1)}
            </Link>
        </div>

        <table className="w-full bg-white">
          <caption className="font-semibold p-3 text-2xl bg-white rounded-t-md">Doctor Schedule</caption>
          <tr className="bg-[#0ea5e9] text-white">
            <th className="py-3 px-3">ID</th>
            <th className="">Doctor Name</th>
            <th>Weekday</th>
            <th>Visting Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {
            doctors.map((item, index) => (
              <tr 
                key={index}
                className={`text-center ${(index % 2 === 0) ? 'bg-white' : 'bg-gray-200'}`}
              >
                <td className="py-3">{item.id}</td>
                <td>{item.doctorName}</td>
                <td>{item.weekday}</td>
                <td>{item.visitingTime}</td>
                <td>{item.status}</td>
                <td>
                  <button className="w-10 h-10 hover:bg-gray-200 rounded-md">
                  <i className="ri-eye-line text-xl"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </table>

        <div className="flex justify-between items-center bg-white px-4 py-4 rounded-md">
          <p>Show 1 to 10 records of 15 entries</p>

          <div>
            <button>
              <i 
                className="ri-arrow-left-s-line text-xl p-2"
                onClick={handlePrevious}
              ></i>
            </button>
            {
              Array(noOfPagination).fill('fetchRecords').slice(0,10).map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setActive(index)}
                  className={`bg-gray-200 px-2 py-2 border m-2 rounded-md ${active === index ? 'bg-sky-500 text-white' : 'bg-white text-black'}`}
                >
                  {index+1}
                </button>
              ))
            }
            <button>
              <i 
                className={`ri-arrow-right-s-line text-xl p-2`}
                onClick={handleNext}
              ></i>
            </button>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Dashboard;
