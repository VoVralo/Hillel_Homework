import React from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { sendBooking } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await dispatch(sendBooking(values));
    navigate('/hotels');
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Destination</label>
            <Field name="destination" component="input" required />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    />
  );
};

export default BookingForm;
