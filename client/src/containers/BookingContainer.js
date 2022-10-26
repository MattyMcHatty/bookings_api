import React, {useState, useEffect} from "react";
import { getBookings } from "../components/BookingsService";
import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {setBookings(allBookings)});
    }, [])

    const addBooking = (booking) => {
        const temp = bookings.map(s => s);
        temp.push(booking);
        setBookings(temp);
    }

    const removeBooking = (id)=> {
        const temp = bookings.map(s => s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);

        temp.splice(indexToDel, 1);
        setBookings(temp);
    }

    const handleCheckIn = (id) => {
        const updatedBookings = bookings.map((booking) => {
            return booking._id === id
                ? {...booking, checkedIn: !booking.checkedIn} : booking
        })
        setBookings(updatedBookings);
    }

    return(
        <main>
            <BookingsForm addBooking={addBooking} />
            <BookingsList bookings={bookings} removeBooking={removeBooking} handleCheckIn={handleCheckIn}/>
        </main>
    )
};

export default BookingContainer;