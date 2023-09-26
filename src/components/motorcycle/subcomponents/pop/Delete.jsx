import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMotorcycle } from '../../../../redux/reducers/motorcycleSlice';

export default function PopDelete({ id }) {
  const [delet, setDelet] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => (delet && dispatch(deleteMotorcycle(id)));
  console.log(id);

  return (
    <div>
      <h1>Do you want to delete ?</h1>
      <button
        type="button"
        onClick={() => {
          setDelet(false);
          handleClick();
        }}
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={() => {
          setDelet(true);
          handleClick();
        }}
      >
        Delete
      </button>
    </div>
  );
}

PopDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
