import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMotorcycle,
  deleteMotorcycle,
} from '../../redux/reducers/motorcycleSlice';
import PopDelete from './subcomponents/pop/Delete';

const DeleteMotorcycle = () => {
  const motorcycles = useSelector((state) => state.motorcycle);
  const { user } = useSelector((state) => state.user);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState('');
  const { token } = user.user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMotorcycle(token));
  }, [dispatch, token]);

  const handleDelete = (id) => {
    dispatch(deleteMotorcycle(id));
  };

  const handleConfirmation = () => {
    setConfirm(!confirm);
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
        {confirm && <PopDelete id={id} /> }
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
                    onClick={() => {
                      setId(motorcycle.id);
                      handleConfirmation();
                    }}
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
