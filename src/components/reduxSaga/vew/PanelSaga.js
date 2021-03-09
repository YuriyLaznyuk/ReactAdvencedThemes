import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionFetchPeople} from "../actionFetch/actionFetchPeople";
import "./PanelSaga.css"
import {asyncMethodAddCount, asyncMethodMinusCount, methodAddCount, methodMinusCount} from "../store/buttonReducer";
import {fetchAddPeopleJson, methodAddPeople, methodDelPeople} from "../store/peopleReducer";
function PanelSaga(props) {
    const count=useSelector(state=>state.buttonReducer.count);
    const people=useSelector(state=>state.peopleReducer.people);
    const dispatch=useDispatch();



    function addManyPeople(){
        dispatch(actionFetchPeople())
    }

    let row=people.map((item,index)=>{
        return(
            <tr key={index} onClick={()=>dispatch(methodDelPeople(item.id))}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                {item.email && <td>{item.email}</td>}
                {item.website && <td>{item.website}</td>}

            </tr>
        )
    })

    return (
        <div>
            <span>{count}</span>

            <input type="button" value='Plus +' onClick={()=>dispatch(asyncMethodAddCount())}/>
            <input type="button" value='Minus -' onClick={()=>dispatch(asyncMethodMinusCount())}/>


            <input type="button" value='addPeople' onClick={()=>dispatch(methodAddPeople(prompt()))}/>


            <input type="button" value='addManyPeople' onClick={()=>addManyPeople()}/>

            <input type="button" value='addManyPeopleSagaFetch' onClick={()=>dispatch(fetchAddPeopleJson())}/>

            <div className={'panelSaga'}>

                {people.length===0 ? "Not table People" :
                <table className={'panelSaga_table'}>
                    <tbody>
                    {row}
                    </tbody>
                </table>}
            </div>
        </div>
    );
}

export default PanelSaga;