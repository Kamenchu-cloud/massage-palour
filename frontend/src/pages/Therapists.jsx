import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Therapists = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // State for toggling filters

  const { massageProfessionals } = useContext(AppContext);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(massageProfessionals.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(massageProfessionals);
    }
  }, [massageProfessionals, speciality]);

  return (
    <div>
      {/* Filters Toggle Button */}
      <button
        className={`sm:hidden py-1 px-3 border rounded text-sm transition-all ${
          showFilter ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-800'
        }`}
        onClick={() => setShowFilter(prev => !prev)}
      >
        {showFilter ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Filter Section */}
        <div
          className={`${
            showFilter ? 'block' : 'hidden'
          } sm:block w-full sm:w-auto mb-6 transition-all duration-300`}
        >
          {/* Massage Types Section */}
          <h3 className="text-gray-900 font-semibold mb-1">Massage Types</h3>
          <ul className="space-y-2 pl-4">
            {['Thai Massage', 'Aromatherapy Massage', 'Deep Tissue Massage', 'Swedish Massage', 'Shiatsu Massage'].map(
              type => (
                <li
                  key={type}
                  onClick={() =>
                    speciality === type ? navigate('/therapists') : navigate(`/therapists/${type}`)
                  }
                  className={`w-[94vw] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                    speciality === type ? 'bg-indigo-100 text-black' : ''
                  }`}
                >
                  {type}
                </li>
              )
            )}
          </ul>

          {/* Travel/Escort Services Section */}
          <div>
            <h3 className="mt-6 text-gray-900 font-semibold mb-3">Travel/Escort Services</h3>
            <ul className="space-y-2 pl-4">
              {['Travel Mate', 'Escorts'].map(service => (
                <li
                  key={service}
                  onClick={() =>
                    speciality === service ? navigate('/therapists') : navigate(`/therapists/${service}`)
                  }
                  className={`w-[94vw] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                    speciality === service ? 'bg-indigo-100 text-black' : ''
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map(item => (
              <div
                onClick={() => navigate(`/appointment/${item.id}`)}
                className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:translate-y-[-5px] transition-all duration-300 shadow-md hover:shadow-2xl"
                key={item.id}
              >
                <img
                  className="w-full h-60 object-cover bg-blue-50"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium mt-4">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No professionals available for the selected speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Therapists;
