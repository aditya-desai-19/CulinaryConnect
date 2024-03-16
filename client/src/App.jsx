import { useState, useCallback, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import AuthContext from "./utils/AuthContext"
import Cookies from "js-cookie";
import { jwtTokenName } from "./utils/Constants";


function App() {
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		const user = Cookies.get(jwtTokenName);
		user === null ? setAuth(null) : setAuth(user);
	}, []);

	const handleLogin = useCallback((user) => {
		setAuth(user);
		Cookies.set(jwtTokenName, user, { expires: 7 });
	}, [setAuth]);

	const handleLogout = useCallback(() => {
		setAuth(null);
		Cookies.remove(jwtTokenName);
	}, [setAuth]);

	return (
		<>
			<AuthContext.Provider value={{auth, handleLogin, handleLogout}}>
				<Navbar />
				<Outlet />
			</AuthContext.Provider>
		</>
	)
}

export default App
