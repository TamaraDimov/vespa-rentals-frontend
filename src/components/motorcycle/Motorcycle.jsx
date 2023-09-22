import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMotorcycle } from '../../redux/reducers/motorcycleSlice';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycle);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  const Succes = () => {
    motorcycle.motorcycle.map((item) => <p key={item.id}>{item.name}</p>);

    return (
      <div>
        <h1>Motorcycle page</h1>
        {motorcycle.status ? <Succes /> : 'Loading...'}
      </div>
    );
  };
}
