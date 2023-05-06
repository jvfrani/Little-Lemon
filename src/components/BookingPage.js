import React, {useReducer} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {fetchAPI} from "./api";
import './BookingPage.css';
import moment from "moment";

function updateTimesReducer(state,action){
    if (action.type === 'update'){
        return {
            availableTimes: fetchAPI(moment(action.date).format('DD'))
        }
    }
}
function BookingPage (props) {

    const [state, dispatch] = useReducer(updateTimesReducer, {availableTimes : fetchAPI(new Date())})

    const handleChangeDiners = () => {
        props.diners <= 1 ? props.setDiners(1) : props.setDiners(props.diners-1)
    }

    const handleChangeDate = (old_date) => {
        let new_date = moment(old_date).format('MMMM DD')
        props.setReservationDate(new_date)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setForm(!props.form)
    }

    return (
        <>
            <form className="needs-validation">
                <span className='span-title-booking'> Booking Little Lemon Restaurant</span>
                <main className="main-border">
                    <div className="row mx-5">
                        <div className="col mx-5 mt-4">
                            <label 
                                className="label-indoor" htmlFor="seating-status"
                            >Indoor</label>

                            <input 
                                onChange={()=>props.setSeatingStatus("Indoor seating")}  aria-label="indoor seating" className="input-indor" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="seating-status" 
                                required
                            />
                        </div>
                        <div className="col mt-4">
                            <label 
                                className="label-indoor" htmlFor="seating-status">Outdoor</label>
                            <input 
                                aria-label="outdoor seating" 
                                onChange={()=>props.setSeatingStatus("Outdoor seating")} 
                                className="input-indor"
                                type="radio" 
                                name="flexRadioDefault" 
                                id="seating-status" 
                                required/>
                        </div>
                    </div>
                    <div className="row mx-5">
                        <div className="col mx-5 mt-4 text-white">
                            <label 
                                aria-label="date" 
                                className="form-check-label mx-4 me-4 text-regular text-white " htmlFor="seating-status">
                                    Date</label>
                            <LocalizationProvider 
                                dateAdapter={AdapterMoment}>
                                <DatePicker 
                                    onChange={(newDate) => {dispatch({type: 'update', date: newDate}); handleChangeDate(newDate)} }  
                                    label="Select Date Prev" />
                            </LocalizationProvider>

                        </div>
                        <div className="col mx-5 mt-4">
                            <label  
                                aria-label="Number of diners" className="diners-text" htmlFor="seating-status"
                                > Number of Person</label><br/>
                                <button 
                                    onClick={() => props.setDiners(props.diners+1)} aria-label="Plus"
                                    type="button" 
                                    className="btn btn-light rounded-circle">+</button>
                                <span 
                                    className="number-person">{props.diners}</span>
                                <button 
                                    onClick={handleChangeDiners} aria-label="Minus"
                                    type="button" 
                                    className="btn btn-light rounded-circle">-</button>
                            </div>
                        </div>
                    <div className="row mx-5">
                        <div className="col mx-5 mt-4">
                            <label className="form-check-label mx-4 me-4 text-regular text-white " htmlFor="occasions">Occasion</label>
                            <div className="mt-4 mb-4">
                                <select aria-label="occasion" onChange={(e) => props.setOccasion(e.target.value)} defaultValue="occasion" required className="form-select">
                                    <option>Occasion</option>
                                    <option value="birthday" >Birthday</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="anniversary">Anniversary</option>
                                </select>
                            </div>

                        </div>
                        <div className="col mx-5 mt-4">
                            <label className="form-check-label mx-4 me-4 text-regular" htmlFor="times">Time</label>
                            <div className="mt-4">
                                <select onChange={(e) => props.setReservationTime(e.target.value)} name="time" defaultValue="Time" required className="form-select " aria-label="Time">
                                    <option>Time</option>
                                    {state.availableTimes.map((item,index) =>
                                        <option key={item} value={item.index}>{item}</option>
                                    )}

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button 
                            type="submit" 
                            onClick={handleSubmit} className="btn-reserve">Reserve a Table</button>
                        </div>
                    </div>
                </main>
            </form>
            {props.status ? <div >
                <div className="alert alert-success d-flex mx-auto w-50" role="alert">
                    <div>
                        Your Reservation has been send! Please check your email!
                    </div>
                </div>
            </div> : ""
            }
        </>
    );
}

export default BookingPage;