import React from 'react'

const SignUp = () => {
    const handleSubmit = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (regex.test(email)) {
            //submit form
        } else {
            alert("Please enter valid email address");
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center border-2 border-black h-52 w-52 mx-auto my-10'>
            <input type="email" placeholder="Email" required className='border-2 border-black m-4'/>
            <input type="password" placeholder="Password" required className='border-2 border-black m-4'/>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>SignUp</button>
        </form>
    )
}

export default SignUp