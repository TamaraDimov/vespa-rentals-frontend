import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMotorcycle, fetchUser } from '../../redux/reducers/motorcycleSlice';
import Item from './subcomponents/MotorcycleItem';

export default function Motorcycle() {
  const dispatch = useDispatch();
  const motorcycle = useSelector((state) => state.motorcycle);
  const { user } = useSelector((state) => state.user);
  const token = user && user.user && user.user.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
      dispatch(fetchMotorcycle(token));
    } else {
      navigate('/');
    }
  }, [token, dispatch, navigate]);
  if (motorcycle.status === 200) {
    const Succes = () => motorcycle.motorcycle.map((item) => (
      <Item
        key={item.id}
        id={item.id.toString()}
        name={item.name}
        photo={item.photo}
        model={item.model}
        description={item.description}
      />
    ));

    return (
      <div>
        <h1>LATEST MODELS</h1>
        <div>
          {motorcycle.isLoading ? <Succes /> : 'Loading...'}

        </div>
      </div>
    );
  }
}
