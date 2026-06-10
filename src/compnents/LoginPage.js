import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, closeLoginModal } from '../store';

function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [doorState, setDoorState] = useState(''); // '' | 'door-open' | 'door-close'
    const [error, setError] = useState('');

    // Allow closing with Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                dispatch(closeLoginModal());
                setDoorState('');
                setError('');
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [dispatch]);

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

    const closeModal = () => {
        dispatch(closeLoginModal());
        setDoorState('');
        setError('');
    };

    return (
        <div className={`welcome-screen ${doorState === 'door-open' ? 'hidden' : ''}`}>
            {/* Prominent X button - always available to go back to the main page */}
            <button
                type="button"
                onClick={closeModal}
                aria-label="Close members sign in and return to main page"
                style={{
                    position: 'fixed',
                    top: '24px',
                    right: '24px',
                    zIndex: 9999,
                    background: 'rgba(13, 27, 42, 0.85)',
                    border: '1px solid rgba(201, 162, 39, 0.4)',
                    color: 'var(--gold, #C9A227)',
                    fontSize: '2rem',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(201, 162, 39, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(13, 27, 42, 0.85)'}
            >
                ×
            </button>

            <div className="door-container">
                <div className={`door ${doorState}`}>
                    <div className="door-content">
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