import main from '../assets/images/main.svg'
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus dolore ea et illo
                        impedit iste iure laboriosam odio officia perferendis quisquam quo ratione reiciendis
                        repellendus, sequi soluta unde voluptates?
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login / Register</Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img'/>
            </div>
        </Wrapper>
    )
}

export default Landing;