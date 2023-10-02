import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addReservation } from '../../redux/reservationActions';
import { fetchMotorcycle } from '../../redux/reducers/motorcycleSlice';
import './AddReservation.css';

function AddReservation() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reservation.status);
  const user = useSelector((state) => state.user.user);
  const token = user ? user.token : '';
  const [reservation, setReservation] = useState({
    start_date: '',
    end_date: '',
    city: '',
    user_id: user && user.data ? user.data.id : '',
    motorcycle_id: '',
  });
  const motorcycle = useSelector((state) => state.motorcycle);
  
  useEffect(() => {
    dispatch(fetchMotorcycle(token));
  }, [dispatch, token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(addReservation(reservation));
      setTimeout(() => {
        setReservation({
          start_date: '',
          end_date: '',
          city: '',
          user_id: user && user.data ? user.data.id : '',
          motorcycle_id: '',
        });
      }, 3000);
    } catch (error) {
      toast.success('Failed to add reservation. Please try again later.');
    }
  };

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Philadelphia',
  ];

  return (
    <div className="reservation-container">
      <form onSubmit={handleSubmit} className="reservation-form">
        <label htmlFor="start_date" className="form-label">
          Start Date:
          <input
            type="date"
            name="start_date"
            id="start_date"
            value={reservation.start_date}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label htmlFor="end_date" className="form-label">
          End Date:
          <input
            type="date"
            name="end_date"
            id="end_date"
            value={reservation.end_date}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label htmlFor="city" className="form-label">
          City:
          <select
            name="city"
            id="city"
            value={reservation.city}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="motorcycle_id" className="form-label">
          Motorcycle:
          <select
            name="motorcycle_id"
            id="motorcycle_id"
            value={reservation.motorcycle_id}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a motorcycle</option>
            {Array.isArray(motorcycle.motorcycle)
            && motorcycle.motorcycle.map((motor) => (
              <option key={motor.id} value={motor.id}>
                {motor.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : 'Add Reservation'}
        </button>
      </form>
    </div>
  );
}

export default AddReservation;
