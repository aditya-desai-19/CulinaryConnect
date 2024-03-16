import { Link } from 'react-router-dom';
import { useContext, useCallback, useEffect } from 'react';
import AuthContext from '../utils/AuthContext';

const Navbar = () => {
	const { auth, handleLogout } = useContext(AuthContext);

	useEffect(() => {

	}, []);
	
	const logoutUser = useCallback(() => {
		handleLogout();
		alert('logged out successfully');
	}, [handleLogout]);

	return (
		<div className='bg-blue-500 h-14 flex justify-between items-center text-white'>
			<span>Culinary Connect</span>
			<ul className='flex'>
				<Link to={'/search'}><li className='mx-2 cursor-pointer'>Search</li></Link>
				{ auth ?
					<li className='mx-2 cursor-pointer' onClick={logoutUser}>Logout</li> :
					<>
						<Link to={'/login'}><li className='mx-2 cursor-pointer'>Login</li></Link>
						<Link to={'/signup'}><li className='mx-2 cursor-pointer'>Signup</li></Link>
					</>
				}
			</ul>
		</div>
	)
}

export default Navbar