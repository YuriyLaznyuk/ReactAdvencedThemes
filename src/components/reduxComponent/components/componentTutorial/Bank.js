import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, deleteCustomerAction, removeCustomerAction} from "./store/customerReducer";

function Bank(props) {
    //хук управляет экшенами
    const dispatch = useDispatch();
    //хук состояния
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    function addCash(cash) {
        dispatch({type: 'add_cash', payload: cash});
    }

    function getCash(cash) {
        dispatch({type: 'get_cash', payload: cash});

    }

    function addCustomer(name) {
        const customer = {
            name: name,
            id: Date.now(),
        };
        // dispatch({type: 'add_customer', payload: customer})
        dispatch(addCustomerAction(customer));
    }

    function removeCustomer(customer) {
// dispatch({type:'remove_customer', payload:customer.id})
        dispatch(removeCustomerAction(customer.id));
    }

    function deleteCustomer(name) {
        dispatch(deleteCustomerAction(name));

    }

    return (
        <div className={'app'}>
            <div>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => deleteCustomer(prompt())}>Удалить клиента</button>

            </div>
            <div>

                {
                    customers.length > 0 ?
                        customers.map(item =>
                            <div onClick={() => removeCustomer(item)}>
                                {item.name}</div>
                        ) : <div>Массив пустой</div>
                }

            </div>

        </div>
    );
}

export default Bank;