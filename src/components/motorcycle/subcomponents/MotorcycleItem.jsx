import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Item(props) {
  const {
    name, description, photo, model, id,
  } = props;
  return (
    <div>
      <Link to={id}><img alt={name} src={photo} /></Link>
      <p>
        {name}
      </p>
      <p>
        {model}
      </p>
      <p>{description}</p>
      <div>
        <img alt="facebook" />
        <img alt="instagram" />
        <img alt="facebook" />
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
