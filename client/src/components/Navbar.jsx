import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-500 h-14 flex justify-between items-center text-white'>
        <span>Culinary Connect</span>
        <ul className='flex'>
            <Link to={'/login'}><li className='mx-2'>Login</li></Link>
            <Link to={'/signup'}><li className='mx-2'>Signup</li></Link>
        </ul>
    </div>
  )
}

export default Navbar