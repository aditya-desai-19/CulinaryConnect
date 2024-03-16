import { useContext, useCallback } from 'react'
import { api } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';

const Login = () => {
    const { handleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = e.target[0].value;
        const password = e.target[1].value;
        const data = {
            Email: email,
            Password: password
        };
        if (regex.test(email)) {
            //submit form
            try {
                const endUrl = `Account/Login`;
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                };
                const response = await fetch(`${api}/${endUrl}`, requestOptions);
                const details = await response.json();
                handleLogin(details);
                if (response.status == 200) {
                    alert("Successfully logged in");
                }
                e.target.reset();
                navigate('/');
            } catch (error) {
                console.log({ error })
                alert("Failed to login");
            }
        } else {
            alert("Please enter valid email address");
        }
    }, [handleLogin]);

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center border-2 border-black h-52 w-52 mx-auto my-10'>
            <input type="email" placeholder="Email" required className='border-2 border-black m-4'/>
            <input type="password" placeholder="Password" required className='border-2 border-black m-4'/>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
        </form>
    )
}

export default Login