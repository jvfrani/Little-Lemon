import React, {useState} from "react";
import BookingForm from "./BookingForm";
import BookingPage from "./BookingPage";
import moment from "moment";

function BookingMain (){

    let today = moment(new Date()).format('MMMM DD')

    const [formStatus, setFormStatus] = useState(false)
    const [seatingStatus, setSeatingStatus] = useState("")
    const [reservationDate, setReservationDate] = useState(today)
    const [diners, setDiners] = useState(1)
    const [occasion, setOccasion] = useState("")
    const [reservationTime, setReservationTime] = useState("")
    const [status, setStatus] = useState(false)


    return(
        <>
            {formStatus ? 
            <BookingForm 
                form={formStatus} 
                seatingStatus={seatingStatus} 
                reservationDate={reservationDate}
                diners={diners} 
                occasion={occasion} 
                reservationTime={reservationTime}
                setForm={setFormStatus}
                setSeatingStatus={setSeatingStatus}
                setReservationDate={setReservationDate} 
                setDiners={setDiners}
                setOccasion={setOccasion}  
                setReservationTime={setReservationTime}
                status={status} 
                setStatus={setStatus}
                /> :
                    <BookingPage 
                        form={formStatus} 
                        seatingStatus={seatingStatus} 
                        reservationDate={reservationDate}
                        diners={diners} 
                        occasion={occasion} 
                        reservationTime={reservationTime}
                        setForm={setFormStatus} 
                        setSeatingStatus={setSeatingStatus}
                        setReservationDate={setReservationDate}  
                        setDiners={setDiners}
                        setOccasion={setOccasion} 
                        setReservationTime={setReservationTime}
                        status={status} 
                        setStatus={setStatus}
                    />}

        </>

    )
}

export default BookingMain;