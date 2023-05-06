import {NavLink} from 'react-router-dom';
import './Navbar.css';


function Navbar(){
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className=" container-fluid">
          <img src='/logonav.png' alt="...cargando" className="nav-img" />
            <button className="navbar-toggler" type="button"    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className=" justify-content-center collapse navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav ">
                <li className="nav-item ">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link active" to="/booking">Booking</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link active" to="/services">Services</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default Navbar;