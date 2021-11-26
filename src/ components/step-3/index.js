import {useNavigate} from 'react-router-dom'
import Footer from "../footer"
import step_3_background_1 from '../../assets/images/step-3-background.webp';
import './index.css';

const Step_3 = ({handleClick}) => {
    return (
        <>
            <main className="step_3" style={{background: `url(${step_3_background_1})`}}>
                <div class="intro-box">
                    <h1>Watched the video? That's great!</h1>
                    <iframe src="https://player.vimeo.com/video/575514568?autoplay=1" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                <section class="about">
                    <div class="book-now">
                        <a onClick={()=>handleClick()} class="book-now-btn btn btn-primary">Watched the entire video? Go
                            to next step.</a>
                    </div>
                    <p>This means you are now equipped with all the basic knowledge that you need to have before you can
                        understand what you stand to gain through my financial advice on what is going to be your commitment.
                    </p>
                    <p>Now is the time to start our journey. For us to be able to travel together, I need to know certain things
                        about you. I have shared a lot about myself in my video and also in the previous page and now I need to
                        know about you.</p>
                    <p>I've listed a form on this page indicating all the necessary bits of information that I need to have from
                        you to be able to assess the further course of action. Please don't hold back. The more I know, the
                        better will be our proceeding interaction. Please don't worry, everything is confidential. I am legally
                        bound to protect your privacy.</p>
                    <p>Your time is precious. So is mine. Hence, the more information we have between us, the more fruitful will
                        be our interaction. Really looking forward to having a chat with you.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default Step_3