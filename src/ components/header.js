import logo from '../assets/images/advatage-logo.png';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-4">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8 col-8">
                        <div className="info">
                            <p>Need Help?<span><i className="far fa-life-ring"></i> info@advantagefp.in | +91-9810144683</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header

