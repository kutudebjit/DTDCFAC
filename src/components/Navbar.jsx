import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <img
                    src="https://www.surtech.edu.in/virtual-tour/skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png?v=1660140335457"
                    width="30"
                    height="30"
                    alt=""
                />
                <span class="navbar-toggler-icon"></span>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;
