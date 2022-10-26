import Booking from "./Booking";


const BookingsList = ({bookings, removeBooking, handleCheckIn}) => {

    const bookingsList = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking} handleCheckIn={handleCheckIn} />
    });

    return(
        <>
            {bookingsList}
        </>
    );
}

export default BookingsList;