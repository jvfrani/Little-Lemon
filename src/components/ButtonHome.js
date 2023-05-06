import {Link} from 'react-router-dom';
import './ButtonHome.css';


function ButtonHome (){
    return(
        <Link to="/">
            <button className="btn-come-back"> Back </button>
        </Link>

    )
}

export default ButtonHome;