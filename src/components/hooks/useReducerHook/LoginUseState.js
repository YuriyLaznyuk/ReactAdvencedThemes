import React, {useState} from 'react';

function LoginUseState(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        setTimeout(()=>{
        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            setError('Invalid username or password');
            setLoading(false);
            setUsername('');
            setPassword('');

        }

        },1000)

    }

    return (

        <div className="login-container">
            {
                isLoggedIn ? (
                    <div>
                        <h1>Welcome {username}</h1>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            setLoading(false);
                        }}>Log Out
                        </button>
                    </div>
                ) : (
                    <form onSubmit={onSubmit}>
                        {error && <p>{error}</p>}
                        <p>Please Login</p>
                        <input type="text" placeholder={'username'} value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <p>Please Password</p>
                        <input type="text" placeholder={'password'} value={password}
                               onChange={e => setPassword(e.target.value)}/>

                        <button type='submit' disabled={loading}>
                            {loading ? 'Logging in...' : 'Log in'}
                        </button>
                    </form>
                )
            }
        </div>

    );
}

export default LoginUseState;