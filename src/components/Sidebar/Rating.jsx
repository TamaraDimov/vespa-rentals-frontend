import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './Rating.css';

const StarRating = () => {
  const user = useSelector((state) => state.user.user);
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem(
      `starRating_${(user && user.user?.data?.id) || ''}`,
    );
    return storedRating ? parseInt(storedRating, 10) : 0;
  });

  useEffect(() => {
    if (user && user.user && user.user.data && user.user.data.id) {
      localStorage.setItem(
        `starRating_${user.user.data.id}`,
        rating.toString(),
      );
    }
  }, [rating, user]);

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

export default StarRating;
