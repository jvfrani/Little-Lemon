import React from "react";
import {submitAPI} from "./api";
import './BookingForm.css';



function BookingForm(props) {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const response = submitAPI(props.reservationDate, props.reservationTime, props.diners, props.seatingStatus)
        if(response){
            props.setStatus(!props.status)
        }
    }

    return (
        <>
            <form className="needs-validation">
                <main className="form-container">
                    <div className="row mx-5 ">
                        <div className="col-5 mx-5 mt-4 ">
                            <label 
                                htmlFor="firstname" 
                                className="first-name-label" 
                                >First Name *: </label>
                            <input 
                                aria-label="First name" 
                                type="text" 
                                className="form-control" 
                                id="firstname"
                                placeholder="first name" required
                            />
                            <div className="valid-feedback">Look good!</div>
                            <div className="invalid-feedback">First Name Required</div>
                        </div>
                        <div className="col-5 mt-4 ">
                            <label 
                                htmlFor="lastname" 
                                className="first-name-label"
                                >Last Name *: </label>
                            <input 
                                aria-label="Last name" 
                                type="text" 
                                className="form-control" 
                                id="lastname"
                                placeholder="last name" required
                            />
                            <div className="valid-feedback">Look good!</div>
                            <div className="invalid-feedback">Last Name Required</div>
                        </div>
                    </div>
                    <div className="row mx-5">
                        <div className="col-5 mx-5 mt-4 ">
                            <label 
                                htmlFor="email" 
                                className="first-name-label"
                            >Email*:</label>
                            <input
                                aria-label="email" 
                                type="email" 
                                className="form-control" 
                                id="email"
                                placeholder="you@company.com" required
                            />
                            <div className="valid-feedback">Look good!</div>
                            <div className="invalid-feedback">Email Required</div>

                        </div>
                        <div className="col-5 mt-4 ">
                            <label 
                                htmlFor="phone" 
                                className="first-name-label"
                                >Phone Number*:</label>
                            <input 
                                aria-label="Phone number" 
                                type="text" 
                                className="form-control" 
                                id="phone"
                                placeholder="phone number" required
                            />
                            <div className="valid-feedback">Look good!</div>
                            <div className="invalid-feedback">Phone Number Required</div>
                        </div>
                    </div>
                    <div className="row mx-5 mt-4">
                        <div className="col mx-5 mt-4">
                            <div className="row">
                                <div className="col text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-calendar2-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                                        <path
                                            d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                                    </svg>
                                    <span className="mx-2 ">Select Date</span>
                                </div>
                                <div className="text-white col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                    </svg>
                                    <span className="mx-3">5 Diners</span>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-alarm" viewBox="0 0 16 16">
                                        <path
                                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                                        <path
                                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                                    </svg>
                                    <span className="mx-2">6:00 pm</span>
                                </div>
                                <div className="col text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-balloon-heart" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
                                    </svg>
                                    <span className="mx-3">Birthday</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-5 mt-3 ">
                        <div className="col mx-5 mb-3 text-white">
                            <div className="form-check">
                                <input 
                                    aria-label="Privacy policy" 
                                    className=" form-check" type="checkbox"
                                    value="" 
                                    name="policy" 
                                    id="policy" 
                                    required
                                />
                                <label 
                                    className="form-check-label" htmlFor="policy"
                                    >
                                You agree to privacy policy</label>
                                <div className="valid-feedback">Look good!</div>
                                <div className="invalid-feedback">Privacy Policy Required</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button 
                                aria-label="On Click" 
                                type="submit" 
                                onSubmit={handleSubmit}
                                className="btn-confirmation ">Confirm Reservation
                            </button>
                        </div>
                    </div>
                </main>
                <div className=" main-food">
                    {props.status ? <div >
                        <div className="status-reserve" role="alert">
                            <div>
                                Your Reservation has been confirmed check your email
                            </div>
                        </div>
                    </div> : ""
                    }
            </div>
            </form>
        </>
    )

}

export default BookingForm;