import {useState} from "react";
import { postBooking } from "./BookingsService";

const BookingsForm =({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false ,
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checkedIn: false,
        });
    }

    return(
            <form onSubmit={onSubmit} id="bookings-form">
                <h2>Add Booking</h2>
                <div className="form-wrap">
                    <label htmlFor="name">Name: </label>
                    <input onChange={onChange} type="text" id="name" name="name" value={formData.name} required />
                </div>
                <div className="form-wrap">
                    <label htmlFor="email">eMail: </label>
                    <input onChange={onChange} type="text" id="email" name="email" value={formData.email} required />
                </div>

                <input type="submit" value="Book" id="book" />
            </form>
        
    );


}

export default BookingsForm;
