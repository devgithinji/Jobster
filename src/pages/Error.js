import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg'
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt="not found"/>
                <h3>ooh! Page not found</h3>
                <p>we can't seem to find the page your are looking for</p>
                <Link to='/'>back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error;