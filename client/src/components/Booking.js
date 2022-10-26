import { deleteBooking } from "./BookingsService";

const Booking = ({booking, removeBooking, handleCheckIn}) => {

    console.log(booking);

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {removeBooking(booking._id)});
    }

    var inOrOut = ""
    if(booking.checkedIn === true){
        inOrOut = "Checked In"
    } else {
        inOrOut = "Not Arrived"
    };

    const handleClick = event => {
        handleCheckIn(booking._id)
    }

    return(
        <>

            <div>Name: {booking.name} </div>
            <div>eMail: {booking.email} </div>
            <div> Checked in: {inOrOut}</div>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleClick}> Check In </button>
            <hr></hr>
        
        </>
    )
}

export default Booking;