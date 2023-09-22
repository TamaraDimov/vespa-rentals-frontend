import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../../redux/reservationActions";

function AddReservation() {
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState({
    start_date: "",
    end_date: "",
    city: "",
    user_id: "",
    motorcycle_id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addReservation(reservation));
    setReservation({
      start_date: "",
      end_date: "",
      city: "",
      user_id: "",
      motorcycle_id: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="start_date">
        Start Date:
        <input
          type="text"
          name="start_date"
          id="start_date"
          value={reservation.start_date}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="end_date">
        End Date:
        <input
          type="text"
          name="end_date"
          id="end_date"
          value={reservation.end_date}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="city">
        City:
        <input
          type="text"
          name="city"
          id="city"
          value={reservation.city}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="user_id">
        User ID:
        <input
          type="text"
          name="user_id"
          id="user_id"
          value={reservation.user_id}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="motorcycle_id">
        Motorcycle ID:
        <input
          type="text"
          name="motorcycle_id"
          id="motorcycle_id"
          value={reservation.motorcycle_id}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Reservation</button>
    </form>
  );
}

export default AddReservation;
