import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './DetailItem.css';

export default function Item({
  name, description, photo, model,
}) {
  const navigate = useNavigate();

  const handleBackToReserve = () => {
    navigate('../../reservations/new/');
  };

  return (
    <div className="detail-motor-container">
      <img alt={name} src={photo} className="detail-motor-image" />
      <div className="detail-motor-detail-conainer">
        <p className="detail-motor-name">{name}</p>
        <p className="detail-motor-model">{model}</p>
        <p className="detail-motor-desc">{description}</p>
        <div className="social-icons" style={{ marginLeft: '10px' }}>
          <button
            type="button"
            className="nice-button"
            onClick={handleBackToReserve}
          >
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
