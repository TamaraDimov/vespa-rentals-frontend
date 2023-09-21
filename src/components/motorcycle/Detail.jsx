import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpecificMotorcycle } from './motorcycleSlice';

export default function Detail() {
  const motorcycleId = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecificMotorcycle(motorcycleId.id));
  }, [dispatch]);

  return (
    <div>
      <h1>Detail motorcycle page</h1>
    </div>
  );
}
