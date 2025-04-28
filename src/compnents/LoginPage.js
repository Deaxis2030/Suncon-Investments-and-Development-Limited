import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store';

function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [doorState, setDoorState] = useState(''); // '' | 'door-open' | 'door-close'
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Dispatching login action');
        if (email && password) {
            setDoorState('door-open');
            setTimeout(() => {
                dispatch(login());
            }, 1500); // Match animation duration
        } else {
            setError('Please enter both email and password');
            setDoorState('door-close');
            setTimeout(() => {
                setDoorState('');
                setError('');
            }, 1500);
        }
    };

    return (
        <div className={`welcome-screen fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${doorState === 'door-open' ? 'hidden' : ''}`}>
            <div className="door-container relative w-full max-w-2xl h-96 mx-auto">
                <div className={`door absolute top-0 left-0 w-full h-full rounded-r-lg transition-transform duration-1500 ${doorState}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Suncon</h1>
                        <p className="text-xl mb-8 text-center">Your premium housing solutions provider</p>
                        <div className="w-full max-w-xs">
                            <div className="keypad rounded-lg p-6 shadow-lg">
                                <div className="text-center mb-6">
                                    <i className="fas fa-lock text-3xl mb-2"></i>
                                    <p className="text-sm">Enter access code</p>
                                </div>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        />
                                    </div>
                                    {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300"
                                    >
                                        Unlock
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;