import { useState, useContext, useEffect } from 'react';
import AuthContext from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if (!auth && !auth?.Token) {
            navigate('/login');
            setText('');
        } else {
            setText('Welcome to search');
        }
    }, [auth]);

    return (
        <div>{text}</div>
    )
}

export default Search