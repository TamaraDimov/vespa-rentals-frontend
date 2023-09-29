import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import {
  fetchReservations,
  deleteReservation,
} from '../../redux/reservationActions';
import './Reservation.css';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleDeleteReservation = (reservationId) => {
    try {
      dispatch(deleteReservation(reservationId));
    } catch (error) {
      toast.error('Failed to delete reservation');
    }
  };

  return (
    <div className="reservation-list-container">
      <div className="reservation-list">
        <h1 className="reservation-list-title">Reservations</h1>
        {reservations.loading && <p>Loading...</p>}
        {reservations.error && (
          <>
            <p>Error:</p>
            <p>{reservations.error}</p>
          </>
        )}
        {!reservations.loading && !reservations.error && (
          <table className="reservation-table">
            <thead className="res-thead">
              <tr className="res-tr">
                <th className="res-th">Start Date</th>
                <th className="res-th">End Date</th>
                <th className="res-th">City</th>
                <th className="res-th">Motorcycle</th>
                <th className="res-th"> </th>
              </tr>
            </thead>
            <tbody className="res-tbody">
              {reservations.reservations
              && reservations.reservations.map((reservation) => (
                <tr key={reservation.id} className="res-tr">
                  <td className="res-td">{reservation.start_date}</td>
                  <td className="res-td">{reservation.end_date}</td>
                  <td className="res-td">{reservation.city}</td>
                  <td className="res-td">{reservation.motorcycle.name}</td>
                  <td className="res-td">
                    {reservations.status !== 'loading' && reservation.id && (
                      <MdDelete
                        className="res-del-btn"
                        onClick={() => handleDeleteReservation(reservation.id)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Reservations;
