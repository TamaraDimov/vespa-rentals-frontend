import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteMotorcycle } from '../../../../redux/reducers/motorcycleSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PopDelete({ id, confirm, setConfirm }) {
  const dispatch = useDispatch();

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <p>Please click DELETE to confirm that you want to delete this item.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirm(!confirm)}>Close</Button>
          <Button
            variant="btn btn-danger"
            onClick={() => {
              dispatch(deleteMotorcycle(id));
              setConfirm(!confirm);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

PopDelete.propTypes = {
  id: PropTypes.number.isRequired,
  confirm: PropTypes.bool.isRequired,
  setConfirm: PropTypes.func.isRequired,
};
