import PropTypes from 'prop-types';

export default function Item({
  name, description, photo, model,
}) {
  return (
    <div>
      <img alt={name} src={photo} className="single-motor-image" />
      <p>{name}</p>
      <p>{model}</p>
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
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
