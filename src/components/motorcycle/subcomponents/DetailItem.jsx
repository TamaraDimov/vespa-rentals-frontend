import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './DetailItem.css';

export default function Item({
  name, description, photo, model,
}) {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="detail-motor-container">
      <img alt={name} src={photo} className="detail-motor-image" />
      <div className="detail-motor-detail-conainer">
        <p className="detail-motor-name">{name}</p>
        <p className="detail-motor-model">{model}</p>
        <p className="detail-motor-desc">{description}</p>
        <div className="social-icons">
          <button type="button" className="nice-button" onClick={handleBackToHome}>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            Back To Home
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
