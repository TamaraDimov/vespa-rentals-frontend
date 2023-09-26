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
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirm(!confirm)}>Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(deleteMotorcycle(id));
              window.location.reload();
            }}
          >
            Save changes
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
