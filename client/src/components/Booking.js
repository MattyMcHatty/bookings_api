import { deleteBooking } from "./BookingsService";

const Booking = ({booking, removeBooking, handleCheckIn}) => {

    console.log(booking);

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {removeBooking(booking._id)});
    }

    var inOrOut = ""
    if(booking.checkedIn){
        inOrOut = "Checked In"
    } else {
        inOrOut = "Not Arrived"
    };

    var checkInButtonText = ""
    if(booking.checkedIn){
        checkInButtonText = "Check Out"
    } else {
        checkInButtonText = "Check In"
    }

    const handleClick = event => {
        handleCheckIn(booking._id)
    }

    return(
        <>

            <div>Name: {booking.name} </div>
            <div>eMail: {booking.email} </div>
            <div> Checked in: {inOrOut}</div>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleClick}> {checkInButtonText} </button>
            <hr></hr>
        
        </>
    )
}

export default Booking;