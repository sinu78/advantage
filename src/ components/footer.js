/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../assets/images/advatage-logo.png';
const Footer = ({pageName, handleClick}) => {
    return (
        <footer>
            {pageName === "step_2" && <div className="book-now">
                <a onClick={()=> handleClick()} className="book-now-btn btn btn-primary" style={{background: "#38d9e5", borderColor: "#38d9e5"}}>Book now</a>
            </div>}
            <div className="container">
                <div className="row text-center">
                    <div className="footer-logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="footer-link">
                            <li><a href="https://advantagefp.in/sitemap.xml">Sitemap</a></li>
                            <li><a href="https://advantagefp.in/disclaimer/">Disclaimer</a></li>
                            <li><a href="https://advantagefp.in/privacy_policy/">Privacy policy</a></li>
                            <li><a href="https://advantagefp.in/terms_and_conditions/">Terms and Conditions</a></li>
                            <li><a href="https://advantagefp.in/refund_and_cancellation/">Refund and Cancellation</a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <p>Copyright &copy; 2021 All Rights Reserved. <a
                            href="https://www.advantagefp.in">Advantage
                            Financial Planners LLP</a></p>
                    <p>For any grievance, email to <a href="mailto:grievance@advantagefp.in" >grievance@advantagefp.in</a></p>
                </div>
            </div>
        </div>    
        </footer >
    )
}
export default Footer