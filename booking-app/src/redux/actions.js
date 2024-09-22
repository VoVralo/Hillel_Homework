export const SEND_BOOKING = 'SEND_BOOKING';
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const SET_HOTELS = 'SET_HOTELS';

export const sendBooking = (data) => ({ type: SEND_BOOKING, payload: data });
export const fetchHotels = () => ({ type: FETCH_HOTELS });
export const setHotels = (hotels) => ({ type: SET_HOTELS, payload: hotels });
