import logo from '../assets/images/advatage-logo.png';

const Header = () => {
    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-4">
                        <div class="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-8 col-8">
                        <div class="info">
                            <p>Need Help?<span><i class="far fa-life-ring"></i> info@advantagefp.in | +91-9810144683</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header

