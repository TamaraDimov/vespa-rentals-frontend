import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMotorcycle } from './motorcycleSlice';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycle);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  console.log(motorcycle);

  return (
    <div>
      <h1>Welcom</h1>
    </div>
  );
}
