import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpecificMotorcycle } from '../../redux/reducers/motorcycleSlice';

export default function Detail() {
  const motorcycleId = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecificMotorcycle(motorcycleId.id));
  }, [dispatch, motorcycleId]);

  return (
    <div>
      <h1>Detail motorcycle page</h1>
    </div>
  );
}
