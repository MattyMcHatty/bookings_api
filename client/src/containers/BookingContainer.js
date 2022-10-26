import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { getBookings, putBooking } from "../components/BookingsService";
import BookingsHome from "../components/BookingsHome";
import NavBar from "../components/NavBar";
import TicTacToe from "../components/TicTacToe";

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
                ? {...booking, checkedIn: !booking.checkedIn} : booking;
        })
        setBookings(updatedBookings);
        const filteredBooking = updatedBookings.filter((booking)=>{return booking._id===id})
        putBooking(filteredBooking);

        
    }

    return(
        <main>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<BookingsHome addBooking={addBooking} bookings={bookings} removeBooking={removeBooking} handleCheckIn={handleCheckIn}/>} />
                    <Route exact path="tictactoe" element={<TicTacToe />} />
                </Routes>
            </Router>
        </main>
    )
};

export default BookingContainer;