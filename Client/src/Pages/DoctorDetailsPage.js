// src/pages/DoctorDetailsPage.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MapComponent from "../Components/MapComponent";
import BookingModal from "../Components/bookingModal";

const DoctorDetailsPage = ({ doctors }) => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleBookingSuccess = (doctorName) => {
    handleCloseModal();
    alert(`Booking successful with ${doctorName}!`);
    // After success, you might want to redirect the user to My Bookings
    window.location.href = "/my-bookings";
  };

  if (!doctor) {
    return (
      <div className="container">
        <h2>Doctor not found</h2>
        <Link to="/doctors" className="cta-button">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/doctors" className="back-link">
        &larr; Back to all doctors
      </Link>

      <div className="doctor-details-header">
        <h1>{`Dr. ${doctor.name}`}</h1>
        <p className="doctor-specialty">{doctor.specialty}</p>
      </div>

      <div className="doctor-details-layout">
        <div className="doctor-details-info">
          <h3>Doctor's Bio</h3>
          <p>{doctor.bio || "No biography available."}</p>

          <h3>Practice Location</h3>
          <p>{doctor.address || "No address provided."}</p>

          <button className="cta-button" onClick={handleOpenModal}>
            Book Appointment
          </button>
        </div>

        <div className="doctor-details-map">
          <MapComponent doctor={doctor} />
        </div>
      </div>

      {isModalOpen && (
        <BookingModal
          doctor={doctor}
          onClose={handleCloseModal}
          onBookingSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

export default DoctorDetailsPage;
