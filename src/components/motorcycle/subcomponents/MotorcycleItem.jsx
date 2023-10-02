import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import '../Motorcycle.css';

export default function Item(props) {
  const {
    name, description, photo, model, id,
  } = props;

  return (
    <div className="single-motor-list">
      <Link to={id}>
        <img alt={name} src={photo} />
      </Link>
      <p className="single-motor-name">{name}</p>
      <p className="single-motor-model">{model}</p>
      <p className="single-motor-description">{description}</p>
      <div className="single-motor-socials">
        <FaTwitter />
        <FaFacebook />
        <FaGoogle />
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
