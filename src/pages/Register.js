import {FormRow, Logo} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser, registerUser} from "../features/user/userSlice";


const initialState = {
    name: '', email: '', password: '', isMember: true
}

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {isLoading, user} = useSelector((store) => store.user)
    const [values, setValues] = useState(initialState)


    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }, [user, navigate])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value})
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please Fill Out All The Fields')
            return
        }
        if (isMember) {
            dispatch(loginUser({email, password}))
            return;
        }
        dispatch(registerUser({name, email, password}))
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo/>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {!values.isMember && <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>}
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
                <button type='submit' className='btn btn-block'>
                    {isLoading ? 'please wait...' : 'submit'}
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button
                        type='button'
                        onClick={toggleMember}
                        className='member-btn'
                        disabled={isLoading}
                    >
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register;