import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMotorcycle,
  deleteMotorcycle,
} from '../../redux/reducers/motorcycleSlice';

const DeleteMotorcycle = () => {
  const motorcycles = useSelector((state) => state.motorcycle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMotorcycle(id));
  };

  const available = motorcycles.motorcycle.length;

  const message = `We have ${available} motorcycle${
    available !== 1 ? 's' : ''
  } available.
  ${
  available
    ? 'Select a motorcycle down below to delete!'
    : 'No motorcycles are available!'
}`;

  return (
    <section>
      <div>
        <h1>Available motorcycles</h1>
        <p>{message}</p>
        <div>
          {Array.isArray(motorcycles.motorcycle)
            && motorcycles.motorcycle.map((motorcycle) => (
              <li key={motorcycle.id}>
                <img src={motorcycle.photo} alt={motorcycle.model} />
                <div>
                  <h2>{motorcycle.name}</h2>
                  <p>{motorcycle.description}</p>
                  <button
                    type="button"
                    onClick={() => handleDelete(motorcycle.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DeleteMotorcycle;
