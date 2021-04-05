import React, {useReducer} from 'react';

function LoginUseReducer(props) {
    const initState = {
        username: '',
        password: '',
        loading: false,
        error: '',
        isLoggedIn: false,
    };
    const [state, dispatch] = useReducer(reducer, initState);
    const {username, password, loading, error, isLoggedIn} = state;

    function reducer(state, action) {
        switch (action.type) {
            case 'field':
                return {
                    ...state,
                    [action.fieldName]: action.payload
                };
            case 'click-logIn':
                return {
                    ...state,
                    loading: true,
                    error: ''
                };
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                };
            case 'error':
                return {

                    error: 'name or password Invalid',
                    isLoggedIn: false,
                    username: "",
                    password: "",
                    loading: false
                };
            case 'click-logOut':
                return {
                    ...state,
                    isLoggedIn: false,
                    loading: false
                };

            default:
                return state;
        }

    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch({type: 'click-logIn'});
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                dispatch({type: 'success'});
            } else {
                dispatch({type: 'error'});
            }
        }, 1000);
    }

    return (
        <div>
            <div className="login-container">
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome {username}</h1>
                            <button onClick={() => dispatch({type: 'click-logOut'})}>Log Out
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit}>
                            {error && <p>{error}</p>}
                            <p>Please Login</p>
                            <input type="text" placeholder={'username'} value={username}
                                   onChange={e => dispatch({
                                       type: 'field', fieldName: 'username'
                                       , payload: e.target.value
                                   })}/>
                            <p>Please Password</p>
                            <input type="text" placeholder={'password'} value={password}
                                   onChange={e => dispatch({
                                       type: 'field', fieldName: 'password'
                                       , payload: e.target.value
                                   })}/>

                            <button type='submit' disabled={loading}>
                                {loading ? 'Logging in...' : 'Log in'}
                            </button>
                        </form>
                    )
                }
            </div>


        </div>
    );
}

export default LoginUseReducer;