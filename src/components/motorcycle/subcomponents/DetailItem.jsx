import PropTypes from 'prop-types';
import './DetailItem.css';

export default function Item({
  name, description, photo, model,
}) {
  return (
    <div className="single-motor-container">
      <img alt={name} src={photo} className="single-motor-image" />
      <div className="single-motor-detail-conainer">
        <p className="single-motor-name">{name}</p>
        <p className="single-motor-model">{model}</p>
        <p className="single-motor-desc">{description}</p>
        <div className="social-icons">
          <img alt="facebook" />
          <img alt="instagram" />
          <img alt="facebook" />
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
