import React, {useState, useEffect} from 'react';
import './style/style.css'

function JestOneFetch(props) {

    const [user, setUser] = useState(null);

    async function fetchUserData(url) {
        const response = await fetch(url);
        setUser(await response.json());
    }

    // function fetchUserData(url) {
    //     fetch(url).then(resp => resp.json())
    //         .then(json => setUsid={}
    // }

    useEffect(() => {
        fetchUserData('https://jsonplaceholder.typicode.com/users');

    }, []);

    if (!user) {
        return "loading...";

    }


    function delUser(item) {
        setUser(user.filter(elem => elem.name !== item.name))

    }

    return (
        <div>

            <table>
                <thead>
                <tr>
                    <th colSpan={4}>JestOneFetch</th>
                </tr>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>website</th>
                    <th>index</th>
                </tr>
                </thead>
                <tbody>
                {


                    user.map((item, index) =>
                        <tr key={index} onClick={() => delUser(item)}>
                            <td className="name">{item.name}</td>
                            <td className="username">{item.username}</td>
                            <td className="website">{item.website}</td>
                            <td className="index">{index}</td>
                        </tr>)

                }
                </tbody>
            </table>


        </div>
    );
}

export default JestOneFetch;