import './Footer.css';

function Footer(){
    return (
        <div className="footer-align card">
            <div className="card-header">
            <img src='/footerlogo.png' alt="...cargando" className="footer-img" />
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>The restaurant has been one of the bigger around the world.</p>
                <footer className="blockquote-footer">© Copyright 2023 admin cristian r <cite title="Source Title">dc</cite></footer>
                </blockquote>
            </div>
        </div>
    )

}

export default Footer;