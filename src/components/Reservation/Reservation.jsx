import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../../redux/reservationActions";

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h1>Reservations</h1>
      {reservations.loading && <p>Loading...</p>}
      {reservations.error && (
        <>
          <p>Error:</p>
          <p>{reservations.error}</p>
        </>
      )}
      {!reservations.loading && !reservations.error && (
        <table>
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>City</th>
              <th>User ID</th>
              <th>Motorcycle ID</th>
            </tr>
          </thead>
          <tbody>
            {reservations.data.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.start_date}</td>
                <td>{reservation.end_date}</td>
                <td>{reservation.city}</td>
                <td>{reservation.user_id}</td>
                <td>{reservation.motorcycle_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reservations;
