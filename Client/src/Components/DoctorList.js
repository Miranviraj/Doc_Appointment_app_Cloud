// src/components/DoctorList.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const DoctorList = ({ doctors }) => {
  if (!doctors || doctors.length === 0) {
    return null; 
  }

  return (
    <div className="doctor-list-container">
      <h3>Available Doctors</h3>
      <ul className="doctor-link-list">
        {doctors.map(doctor => (
          // ⭐️ Each list item is now a Link ⭐️
          <li key={doctor.id} className="doctor-link-item">
            <Link to={`/doctor/${doctor.id}`}>
              <div className="doctor-info">
                <strong>Dr.{doctor.name}</strong>
                <span>{doctor.speciality}</span>
              </div>
              <span className="view-details-arrow">&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;