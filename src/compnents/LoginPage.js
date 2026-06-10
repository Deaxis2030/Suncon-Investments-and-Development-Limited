import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, closeLoginModal } from '../store';

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
                dispatch(closeLoginModal());
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
        <div className={`welcome-screen ${doorState === 'door-open' ? 'hidden' : ''}`}>
            <div className="door-container">
                <div className={`door ${doorState}`}>
                    <div className="door-content">
                        <button
                            type="button"
                            onClick={() => dispatch(closeLoginModal())}
                            aria-label="Close members sign in"
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'rgba(255,255,255,0.15)',
                                border: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                lineHeight: '1',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ×
                        </button>
                        <h1 className="text-xl font-bold mb-4" style={{ fontSize: '2rem' }}>Welcome to Suncon</h1>
                        <p className="text-xl mb-8 text-center">Your premium housing solutions provider</p>
                        <div className="keypad">
                            <div className="text-center mb-6">
                                <i className="fas fa-lock" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}></i>
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
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error && <p className="error-text">{error}</p>}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Unlock
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;