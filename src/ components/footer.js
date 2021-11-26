import logo from '../assets/images/advatage-logo.png';
const Footer = ({pageName, handleClick}) => {
    return (
        <footer>
            {pageName === "step_2" && <div class="book-now">
                <a onClick={()=> handleClick()} class="book-now-btn btn btn-primary" style={{background: "#38d9e5", borderColor: "#38d9e5"}}>Book now</a>
            </div>}
            <div class="container">
                <div class="row text-center">
                    <div class="footer-logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="footer-link">
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Disclaimer</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Refund and Cancellation</a></li>
                        </ul>
                    </div>
                    <div class="col-12">
                        <p>Copyright &copy; 2021 All Rights Reserved. <a
                            href="https://www.advantagefp.in">Advantage
                            Financial Planners LLP</a></p>
                    <p>For any grievance, email to <a href="mailto:grievance@advantagefp.in"/>grievance@advantagefp.in</p>
                </div>
            </div>
        </div>    
        </footer >
    )
}
export default Footer