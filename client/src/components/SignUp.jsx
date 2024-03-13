import React from 'react'
import { api } from '../utils/Constants';

const SignUp = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = e.target[0].value;
        const password = e.target[1].value;
        const role = e.target[2].value;
        const data = {
            Email: email,
            Password: password,
            Role: parseInt(role)
        };
        if (regex.test(email)) {
            try {
                const endUrl = `Account/SignUp`;
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                };
                const response = await fetch(`${api}/${endUrl}`, requestOptions);
                if(response.status == 200 ) {
                    alert("Successfully signed up");
                }
            } catch (error) {
                console.log({error})
                alert("Failed to sign up");
            }
        } else {
            alert("Please enter valid email address");
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center border-2 border-black h-52 w-52 mx-auto my-10'>
            <input type="email" placeholder="Email" required className='border-2 border-black m-4'/>
            <input type="password" placeholder="Password" required className='border-2 border-black m-4'/>
            <select className='w-2/3 border-2 border-black m-2'>
                <option value="1" selected="selected">User</option>
                <option value="2">Admin</option>
            </select>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>SignUp</button>
        </form>
    )
}

export default SignUp