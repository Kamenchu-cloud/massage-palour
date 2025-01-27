import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FaCheckCircle } from 'react-icons/fa'; // Verified icon
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Info icon
import RelatedTherapists from '../components/RelatedTherapists';

const Appointment = () => {
  const { id } = useParams();
  const { massageProfessionals, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const numericId = parseInt(id, 10);

  // Fetch Therapist Info
  const fetchDocInfo = () => {

    // Find the professional with the matching ID
    const docInfo = massageProfessionals.find((doc) => doc.id === numericId)

    setDocInfo(docInfo)
    console.log(docInfo)
  };

  // Get Available Time Slots
  const getAvailableSlots = () => {
    if (!docInfo) return; // Ensure docInfo exists

    const today = new Date();
    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      // Calculate current date
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set end time for the day
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      // Set start time for today or other days
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];

      // Generate time slots in 30-minute intervals
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  // Fetch docInfo when id or massageProfessionals change
  useEffect(() => {
    fetchDocInfo();
  }, [massageProfessionals, id]);

  // Get slots when docInfo is available
  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return docInfo ? (
    <div>
      {/* ---------------------- Therapist Details ------------------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-white sm:max-w-72 rounded-lg"
            src={docInfo.image || '/default-image.jpg'} // Fallback for missing image
            alt={docInfo.name || 'Therapist'}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0">
          {/* ------------------------ Therapist Info ---------------- */}
          <p className="flex items-center gap-2 text-lg font-semibold">
            {docInfo.name || 'Unavailable'}
            {docInfo.name && <FaCheckCircle className="text-green-500" />}
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-800">
            <p>{docInfo.speciality || 'No speciality available'}</p>
          </div>

          {/* --------------- About Section ------------------------- */}
          <div>
            <p className="flex items-center gap-2 text-lg font-semibold mt-3">
              About
              <AiOutlineInfoCircle className="text-blue-500" />
            </p>
            <p className="text-sm text-gray-800 max-w-[700px] mt-1">
              {docInfo.about || 'No information available about this therapist.'}
            </p>
          </div>
          <p className="text-gray-700 font-medium mt-4">
            Appointment fee:{' '}
            <span className="text-gray-800">
              {currencySymbol || '$'}
              {docInfo.fees || 'N/A'}
            </span>
          </p>
        </div>
      </div>

      {/* ------------------ Booking Slots ------------------*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-800">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 ? (
            docSlots.map((daySlots, index) => (
              <div
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index ? 'bg-pink-400 text-black' : 'border border-gray-200'
                }`}
                key={index}
                onClick={() => setSlotIndex(index)}
              >
                <p>{daySlots[0]?.datetime ? daysOfWeek[daySlots[0].datetime.getDay()] : ''}</p>
                <p>{daySlots[0]?.datetime ? daySlots[0].datetime.getDate() : ''}</p>
              </div>
            ))
          ) : (
            <p>No slots available</p>
          )}
        </div>

        {/* Render time slots for the selected day */}
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 && docSlots[slotIndex]?.length > 0 ? (
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime ? 'bg-pink-300 text-black' : 'text-gray-700 border border-gray-200'
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No slots available for the selected day.</p>
          )}
        </div>
        <button className="bg-purple-200 text-black text-sm font-light px-14 py-3 rounded-full my-6">
          Book an Appointment
        </button>
      </div>

      {/* ---------------------- Related Therapists --------------------- */}
      <RelatedTherapists docId={numericId} speciality={docInfo.speciality} />
    </div>
  ) : (
    <div className="text-center text-gray-600">
      <p>Loading therapist information...</p>
    </div>
  );
};

export default Appointment;
