import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { fetchMotorcycle } from '../../redux/reducers/motorcycleSlice';
import PopDelete from './subcomponents/pop/Delete';
import './DeleteMotorcycle.css';

const DeleteMotorcycle = () => {
  const motorcycles = useSelector((state) => state.motorcycle);
  const { user } = useSelector((state) => state.user);
  const [confirm, setConfirm] = useState(false);
  const [id, setId] = useState();
  const { token } = user.user;
  const [curr, setCurr] = useState(0);

  const dispatch = useDispatch();
  const prev = () => setCurr((curr) => (curr === 0 ? motorcycles.motorcycle.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === motorcycles.motorcycle.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    dispatch(fetchMotorcycle(token));
  }, [dispatch, token]);

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
    <section className="delete-motorcycle-bg">
      <div className="delete-motorcycle-container overflow-hidden relative">
        {confirm && (
          <PopDelete id={id} confirm={confirm} setConfirm={setConfirm} setCurr={setCurr} />
        )}
        <h1>Available motorcycles</h1>
        <p className="text-slate-800 hover:text-black-600">{message}</p>
        <div
          className="delete-motorcycle-list-all flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {Array.isArray(motorcycles.motorcycle)
            && motorcycles.motorcycle.map((motorcycle, index) => (
              <div
                key={motorcycle.id}
                className={`delete-motorcycle-list flex-none w-full ${
                  index !== curr
                    ? 'hidden opacity-0 transition-opacity duration-500'
                    : 'opacity-100 transition-opacity duration-500'
                }`}
              >
                <li>
                  <img
                    src={motorcycle.photo}
                    alt={motorcycle.model}
                    className="w-full h-full object-cover"
                  />
                  <div>
                    <h2>{motorcycle.name}</h2>
                    <p>{motorcycle.description}</p>
                    <button
                      type="button"
                      className="del-btn-danger z-10"
                      onClick={() => {
                        setId(motorcycle.id);
                        handleConfirmation();
                        window.scrollTo(0, 0);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            ))}
        </div>
        <div className="inset-0 flex items-center justify-between p-3">
          <button
            type="button"
            onClick={prev}
            className="p-1 rounded-full shadow bg-black/80 text-white hover:bg-gray-500"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            className="p-1 rounded-full shadow bg-black/80 text-white hover:bg-gray-500"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {Array.isArray(motorcycles.motorcycle)
              && motorcycles.motorcycle.map((motorcycle, i) => (
                <div
                  key={motorcycle.id}
                  className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteMotorcycle;
