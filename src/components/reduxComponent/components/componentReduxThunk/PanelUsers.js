import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './styleReduxThunk.css'
import {fetchUser} from "./fetchAction/fetchUser";


function PanelUsers(props) {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();


    function addUser(user) {
        const data = {
            name: user,
            id: Date.now()
        }
        dispatch({type: 'addUser', payload: data})

    }

    function deleteUser(user) {
        dispatch({type: 'deleteUsers', payload: user.id})

    }

    function addFetchUser() {
        dispatch(fetchUser())
    }

    let tabUser = users.map((item, index) => (
        <tr key={index} onClick={() => deleteUser(item)}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            {item.username && <td>{item.username}</td>}
            {item.email && <td>{item.email}</td>}

        </tr>
    ))

    return (
        <div className={'panelUser'}>

            <input type="button" value={'addUser'} onClick={() => addUser(prompt())}/>
            <input type="button" value={'addFetchUser'} onClick={() => addFetchUser()}/>
            <div>
                {users.length === 0 ? <span>Not users list</span>
                    :
                    <table className={'panelUser_table'}>
                        <tbody>
                        {tabUser}
                        </tbody>
                    </table>

                }
            </div>
        </div>
    );
}

export default PanelUsers;