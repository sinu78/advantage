import {useNavigate} from 'react-router-dom'
import Footer from "../footer"
import logo from '../../assets/images/advatage-logo.png';
import step_2_background_1 from '../../assets/images/step-2-background.jpeg';
import taresh_bhatia_profile from '../../assets/images/a-profile-of-taressh-bhatia.jpeg';
import financial_planner from '../../assets/images/why-should-you-pay-a-fee-to-a-financial-planner.jpeg';
import testimonial from '../../assets/images/testimonial.jpeg';
import taresh_bhatia from '../../assets/images/taresh-bhatia.jpeg';
import step_2_background_2 from '../../assets/images/step-3-background.webp';
import arrows from '../../assets/images/arrows.png';
import './index.css';

const Step_2 = ({handleClick}) => {
    return (
        <>
            <main className="step_2">
                <section class="main-screen" style={{background: `url(${step_2_background_1}) center right no-repeat`, backgroundAttachment: "fixed"}}>
                    <div class="container">
                        <div class="row">
                            <div class="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-12">
                                <h1>Welcome to the beginning of your journey towards richness.</h1>
                                <p class="text-center">We are really excited to see you on this page. It means you have
                                    initiated your journey towards unravelling the secrets to financial abundance. </p>
                                <p class="text-center"><span>You want to know more, right? You want to know how we can really
                                    help you.</span></p>
                                <div class="text-center"
                                    style={{background: `url(${arrows}) center center no-repeat`, height: "200px", marginBottom: "50px"}}>
                                    <a onClick={()=>handleClick()} class="btn btn-primary watch-the-video-btn">Watch the
                                        video.</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">

                            </div>
                        </div>
                    </div>
                </section>
                <section class="video-slides">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <a href="https://youtu.be/0T1rDnoiuJI" target="_blank">
                                    <div class="video-box text-center">
                                        <div class="feature-img">
                                            <img src={taresh_bhatia_profile} alt="" />
                                        </div>
                                        <h2>A Profile of Taressh Bhatia</h2>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-md-4">
                                <a href="https://youtu.be/0vnXEQODeuU" target="_blank">
                                    <div class="video-box text-center">
                                        <div class="feature-img">
                                            <img src={financial_planner} alt="" />
                                        </div>
                                        <h2>Why should You Pay a Fee to a Financial Planner? What are the roles of a financial
                                            Planner?</h2>
                                    </div>
                                </a>
                            </div>
                            <div class="col-12 col-md-4">
                                <a href="https://youtu.be/D3FryH_m0Wo" target="_blank">
                                    <div class="video-box text-center">
                                        <div class="feature-img">
                                            <img src={testimonial} alt="" />
                                        </div>
                                        <h2>Testimonial for Taresh Bhatia By Sachin and Shivani Bhatnagar
                                        </h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="about-author text-center" style={{background: `url(${step_2_background_2})`}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <img src={taresh_bhatia} alt="" class="profile-pic" />
                                <h1>About Taresh Bhatia</h1>
                                <div class="divider">
                                    <div class="divider-dots"></div>
                                </div>
                                <p>Well, this is where your life begins to change.</p>
                                <p>As explained on the previous page, we are among India's top financial advisors, certified by
                                    SEBI.</p>
                                <p>To tell you frankly, we do not have a magic wand, and we do not promise the stars. We intend
                                    to remain on the ground and help you build the future of your dreams.</p>
                                <p>Becoming rich is an all-encompassing transformation. You cannot change your financial
                                    situation without changing yourself because your financial situation represents who you are.
                                    So, as soon as we start working with you, our first objective is to change your mindset and
                                    outlook towards money.</p>
                                <p>You will be surprised to know that money is not a mythical being. It does not depend on
                                    chance. Money can be grown. Everyone can become rich. There is nothing special that
                                    differentiates you from the superrich. The superrich simply do things that help them grow
                                    money. If you to do those things, you can also become rich.</p>
                                <p>What are those things? It has much to do with financial planning. Aren't you already
                                    planning? You could be, but then, why are not your finances growing? Something must be
                                    missing. What is it?</p>
                                <p>Proceed to the next page to watch our video on what type of financial planning makes you rich
                                </p>
                                <p>To know more, please provide your name, email and mobile number here.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer pageName="step_2" handleClick={handleClick} />
        </>
    )
}
export default Step_2