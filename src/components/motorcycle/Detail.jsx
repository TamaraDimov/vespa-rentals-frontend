import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpecificMotorcycle, fetchUser } from '../../redux/reducers/motorcycleSlice';
import Item from './subcomponents/DetailItem';

export default function Detail() {
  const motorcycleId = useLoaderData();
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycle.specificMotorcycle.motorcycle);
  const isLoading = useSelector((state) => state.motorcycle.specificMotorcycle.isLoading);
  const isMotorcycle = useSelector((state) => state.motorcycle);
  const { user } = useSelector((state) => state.user);
  const { token } = user.user;

  useEffect(() => {
    dispatch(fetchUser(token));
    dispatch(fetchSpecificMotorcycle(motorcycleId.id));
  }, [token, dispatch, motorcycleId.id]);

  if (isMotorcycle.status === 200) {
    const Succes = () => (
      <Item
        key={motorcycle.id}
        name={motorcycle.name}
        photo={motorcycle.photo}
        model={motorcycle.model}
        description={motorcycle.description}
      />
    );

    return (
      <div>
        <h1>Detail motorcycle page</h1>
        {isLoading ? <Succes /> : 'Loading...'}
      </div>
    );
  }
}
