import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMotorcycle } from '../../redux/reducers/motorcycleSlice';
import Item from './subcomponents/Item';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycle);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  const Succes = () => {
    motorcycle.motorcycle.map((item) => (
      <Item
        key={item.id}
        name={item.name}
        photo={item.photo}
        description={item.description}
      />
    ));
  };

  return (
    <div>
      <h1>LATEST MODELS</h1>
      {motorcycle.status ? <Succes /> : 'Loading...'}
    </div>
  );
}
