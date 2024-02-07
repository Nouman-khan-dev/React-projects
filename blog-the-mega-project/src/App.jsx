import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <Header />
            <main>TODO: {/* //oulet */}</main>
            <Footer />
        </div>
    ) : null;
}

export default App;