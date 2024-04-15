import { FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return <>
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <div className="footer-div">
                <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaInstagram /> </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaTwitter /> </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaYoutube /> </a></li>
                </ul>
                </div>
            </footer>
        </div>
    </>
}
export default Footer;