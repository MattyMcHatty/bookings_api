import React from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';


const BookingsHome = ({addBooking, bookings, removeBooking, handleCheckIn}) => {

    return(
        <>
        <main>
            <BookingsForm addBooking={addBooking} />
        </main>
        <span>
            <BookingsList bookings={bookings} removeBooking={removeBooking} handleCheckIn={handleCheckIn}/>
        </span>
        </>
        
        
    )
}

export default BookingsHome;