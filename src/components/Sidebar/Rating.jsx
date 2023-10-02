import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserFromLocalStorage } from '../../helpers/LocalStorage';
import './Rating.css';

const StarRating = () => {
  const userData = getUserFromLocalStorage();
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem(`starRating_${userData.user.data.id}`);
    return storedRating ? parseInt(storedRating, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`starRating_${userData.user.data.id}`, rating.toString());
  }, [rating, userData.user.data.id]);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    if (rating === 5) {
      const starElements = document.querySelectorAll('.star');
      starElements.forEach((starElement) => {
        starElement.classList.add('celebration-animation');
      });

      setTimeout(() => {
        starElements.forEach((starElement) => {
          starElement.classList.remove('celebration-animation');
        });
      }, 3000);
    }
  }, [rating]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {rating ? (
        <h2 className="rating-heading">{`Rating: ${rating}`}</h2>
      ) : (
        <h2 className="default-heading">⭐ Rate App ⬇️</h2>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            selected={value <= rating}
            onClick={() => handleRatingChange(value)}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <button
    type="button"
    className={`star ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    {selected ? '★' : '☆'}
  </button>
);

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StarRating;
