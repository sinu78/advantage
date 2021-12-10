import { useReducer, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import taresh_bhatia_homepage from '../../assets/images/taresh-bhatia-homepage.png';
import benefir_1 from '../../assets/images/benefir-1.png';
import benefir_2 from '../../assets/images/benefir-2.png';
import benefir_3 from '../../assets/images/benefir-3.png';
import benefir_4 from '../../assets/images/benefir-4.png';
import taresh from '../../assets/images/taresh.jpeg';
import './index.css';

const Home = ({getFormValidation}) => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            email: '',
            mobileNo: ''
        }
    );
    const [formSubmitted, setFormSubmit] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleAlert = (e) => {
        e.preventDefault()
        alert("Fill form to watch the video")
        window.scrollTo(0, 345)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({[name]: value})
    }

    const handleSubmit = () => {
        setFormSubmit(true)
        const isValidated = validateForm()
        if(isValidated){
            getFormValidation(true)
        }
    }

    const validateForm = () => {
        const errors = []
        if (!state.name) {
            errors.push('Name is Required.')
        }
        if (!state.email) {
            errors.push('Email is Required.')
        }
        else if (!state.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            errors.push('Invalid Email. Please enter email as name@email.com')
        }
        if (!state.mobileNo) {
            errors.push('Mobile No is Required.')
        }
        else if(!/^\d*$/.test(state.mobileNo)){
            errors.push('Mobile No is not valid.')
        }
        if (errors.length) {
            setErrors(errors)
            return false
        }
        return true
    }

    return (
        <>
            <Header/>
            <main>
                <section class="taresh-bhatia">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="about">
                                    <h1>Attain financial security and abundance in foreseeable future<span>A 4-step roadmap for financial security and richness</span></h1>
                                    <div class="diveder">
                                        <div class="diveder-dots"></div>
                                    </div>
                                    <p>Expert advice on growing your money strategically and in a way that sustains long-term
                                        growth.</p>
                                    <h2>Rarely shared insights into financial planning <br/>Why people have financial problems? What sets them free?</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="reserve-my-seat-form">
                                <h1>To get started, on the 4-STEP ROADMAP FOR FINANCIAL SECURITY AND RICHNESS</h1> 
                                <h2>Please provide your name, email and contact details here.
                                We won't send you spam. Unsubscribe at any time.</h2>
                                <h3>Subscribe and get Free Newsletter</h3> 
                                    {errors && errors.map(item=>{
                                        return(
                                            <div class="alert alert-danger d-flex align-items-center" role="alert">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                                </svg>
                                                <div style={{marginLeft: '10px'}}>
                                                    {item}
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <form>
                                        <div class="form-group">
                                            <input value={state.name} onChange={(e)=>handleChange(e)} type="text" className={`form-control form-input ${(!state.name && formSubmitted) ? 'error' : ''}`} name="name" placeholder="Name*"/>
                                        </div>
                                        <div class="form-group">
                                            <input value={state.email} onChange={(e)=>handleChange(e)} type="text" className={`form-control form-input ${(!state.email && formSubmitted) ? 'error' : ''}`} name="email" placeholder="Email*"/>
                                        </div>
                                        <div class="form-group">
                                            <input value={state.mobileNo} onChange={(e)=>handleChange(e)} type="text" className={`form-control form-input ${(!state.mobileNo && formSubmitted) ? 'error' : ''}`} name="mobileNo" placeholder="Mobile*"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="button" onClick={()=>handleSubmit()} class="btn btn-primary form-btn" value="Submit"/>
                                        </div>
                                        <div class="form-group">
                                            <label>By providing us with your information you are consenting to the collection and use of your information in accordance with our Terms of Service and Privacy Policy
                                            </label>
                                            <label>*Don’t proceed before watching this video!</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                {/* <img src={taresh_bhatia_homepage} alt=""/> */}
                                <iframe src="https://player.vimeo.com/video/651557010?autoplay=1" frameborder="1"
                                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="about-section">
                    <div class="conatiner">
                        <div class="row">
                            <div class="col-12">
                                <div class="intro">
                                    <h2>Hi! I am Taresh. I am a CERTIFIED FINANCIAL PLANNER Pro.</h2>
                                    <div class="diveder-blue">
                                        <div class="diveder-dots"></div>
                                    </div>
                                    <p>I excel in helping people like you become financially secure and rich. I’m licensed for
                                        that. In a nutshell, this is how I can help you.</p>
                                </div>
                            </div>
                            <div class="about-section-features">
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="intro-box">
                                            <div class="row">
                                                <div class="col-md-3 col-12">
                                                    <div class="img-box">
                                                        <img src={benefir_1} alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="text-box">
                                                        <h3><span>Benefit #1</span>Realistic assessment</h3>
                                                        <p>We shall discuss and make a realistic assessment of your current
                                                            financial situation including investments, tax returns, lifestyle,
                                                            insurance policies, cash at hand and Future goals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="intro-box">
                                            <div class="row">
                                                <div class="col-md-3 col-12">
                                                    <div class="img-box">
                                                        <img src={benefir_2} alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="text-box">
                                                        <h3><span>Benefit #2</span>Future goals assessment</h3>
                                                        <p>Kids’ education, money for the spouse in your absence, pension fund,
                                                            health insurance, inflation, depreciation and interest rates,
                                                            unpredictable expenses, asset acquisition... we will cover all. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="intro-box">
                                            <div class="row">
                                                <div class="col-md-3 col-12">
                                                    <div class="img-box">
                                                        <img src={benefir_3} alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="text-box">
                                                        <h3><span>Benefit #3</span>Current and future opportunities</h3>
                                                        <p>This is where your money grows. Recognize the opportunities. Make
                                                            profitable investments and avoid bad investments. Asset allocation.
                                                            We strategize your expenses. We reassess and streamline life and
                                                            health insurance.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="intro-box">
                                            <div class="row">
                                                <div class="col-md-3 col-12">
                                                    <div class="img-box">
                                                        <img src={benefir_4} alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-12">
                                                    <div class="text-box">
                                                        <h3><span>Benefit #4</span>Ongoing handholding</h3>
                                                        <p>Life is full of unpredictable events. Things never work according to
                                                            plan. This is where, you need someone who can guide you through the
                                                            chaos and help you avoid the pitfalls and booby traps. I can keep
                                                            you on the right path. I can stop you from making unsafe financial
                                                            decisions. I can constantly point you to profitable opportunities.
                                                            We will grow your finances together.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="reserve-my-seat">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="about">
                                    <h1>Don't proceed before watching the video.</h1>
                                    <div class="diveder">
                                        <div class="diveder-dots"></div>
                                    </div>
                                    <p>I have specially made the video for you so that you have a very clear idea of what I'm
                                        going to deliver and what is going to be YOUR commitment in terms of fee,
                                        mission-readiness and time. Please remember that this is a journey we are going to take
                                        together. You will need to be eager to work with me, pay close attention to what I'm
                                        telling you and most importantly, trust me. </p>
                                    <p>In the video I have explained in detail why I'm qualified to give you the advice I will
                                        be giving you to make you financially secure and rich. I don't just have an experience
                                        of 20 years working in the financial sector, I'm also a licensed financial advisor. SBI
                                        charges a hefty fee to renew the license every five years (to the tune of INR 5 lakh)
                                        and they have a very strict criteria.</p>
                                    <p>During the years I have spent giving financial advice, I have seen people ruining
                                        themselves by taking financial decisions they could have easily avoided under the right
                                        guidance. It is just a matter of knowing and not knowing. I can fill the "knowing" gap.
                                    </p>
                                    <p>I know how precious your time is. I also value my own time so that I can better spend it
                                        serving people like you. The video removes every possible ambiguity. By the time you
                                        arrive at the next stage of our interaction, you will have a clear idea of what I will
                                        deliver and what you will get for the fee you will be paying me. </p>
                                    <p>Hence, it is very important for you to watch this video.</p>
                                    <p><a href="#" onClick={(e)=>handleAlert(e)}
                                        class="btn btn-primary">Please Watch the entire Video to go to the Next Step</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section class="financial-planning">
                    <div class="comntainer">
                        <div class="fp-box">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <h2>Financial planning is important for your future <br />...as well as the future of your
                                        loved ones.</h2>
                                    <div class="diveder">
                                        <div class="diveder-line"></div>
                                    </div>
                                    <p>You shouldn't take financial planning lightly. Expenses can be unpredictable. There could
                                        be 100% or even more inflation by the time you reach your 60s or 70s. There could be
                                        medical expenses you can't even imagine right now. One of your kids may decide to pursue
                                        a career that requires you to arrange lots of cash suddenly. In case something happens
                                        to you, you don't want to leave your spouse financially dependent on your kids.
                                        Uncomfortable, but realistic scenarios. Wouldn't you want to be prepared for them?</p>
                                    <p>Good news is, such financial security is not unattainable. With strategic planning and a
                                        concerted effort over a period of 5-10 years can make your post-retirement years joyful,
                                        comfortable and financially independent. One simple decision like deciding to work with
                                        a financial advisor, can change your future, for better.</p>
                                </div>
                                <div class="col-md-6 col-12">
                                    <img src={taresh} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer/>
        </>
    )
}
export default Home