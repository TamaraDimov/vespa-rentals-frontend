import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMotorcycle } from '../../../../redux/reducers/motorcycleSlice';

export default function PopDelete({ id, confirm , setConfirm }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Do you want to delete ?</h1>
      <button type="button">
        Cancel
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteMotorcycle(id));
          window.location.reload();
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
