import React,{useState,useEffect} from 'react';
import useFetch from "react-fetch-hook";

function JestFetch(props) {
    const { isLoading, error, data } = useFetch("https://jsonplaceholder.typicode.com/users");
const[user,setUser]=useState('');

let arr=data;
useEffect(()=>{
 setUser(arr);
})
function delArr(item) {
    // let arr1=arr;
arr.filter(elem=>elem.name!==item.name);
// arr=arr1;
}
console.log(arr);
    if (isLoading) return "Loading...";
    if (error) return "Error!";


    return (
        <div>
            {/*<pre>{JSON.stringify(arr, null, 2)}</pre>*/}
            <table>
            <thead>
            <tr>
                <th colSpan={4}>JestFetch useFetch</th>
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

                    arr.map((item,index)=>
                        <tr key={index} onClick={()=>delArr(item)}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            <td>{index}</td>
                        </tr>)

                }
                </tbody>
            </table>

        </div>
    );
}
export default JestFetch;