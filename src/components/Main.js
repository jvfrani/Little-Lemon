import Slider from '../components/Slider'
import {Link} from 'react-router-dom';
import './Main.css';

function Main(){
    return (
        <main>
        <div className="container-fluid main-section">
            <div className="container-main ">
                <div className="row ">
                    <div className="col text-start mx-5">
                        <span className="span-text">Little Lemon</span>
                        <p className="p-text">Chicago</p>
                        <p style={{width:"20rem"}} className="text-white mx-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/booking">
                            <button type="button" className="btn-text  mx-5 mb-4">Reserve a Table</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        <Slider/>
    </main>
    )
}

export default Main;