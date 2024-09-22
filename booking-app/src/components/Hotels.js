import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/actions';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
