import React from 'react';
import {useSelector,useDispatch} from "react-redux";

const Ban = () => {
    // get state
    const stateCount=useSelector(state=>state.count.count);
    const stateProduct=useSelector(state=>state.product.product)
// to control action
    const dispatch=useDispatch();

    // handlers count
    function addCount(count) {
        dispatch({type:'addCount', payload:count})

    }
function minusCount(count) {
        dispatch({type:'minusCount', payload:count})

}

// handlers product
    function addProduct(name) {
        const product={
            name:name,
            id: Date.now()
        }
        dispatch({type:'addProduct', payload:product})

    }
function delProduct(product) {
        dispatch({type:'delProduct',payload:product.id})

}
    return (
        <div>
            <p>Counter + and - </p>
           <span>{stateCount}</span>
            <input type="button" onClick={()=>addCount(1)} value={'addCount'}/>
            <input type="button" onClick={()=>minusCount(1)} value={'minusCount'}/>
            <div>
                <span>Product</span>
                <input type="button" value={'addProduct'} onClick={()=>addProduct(prompt())}/>
                {stateProduct.length===0 ? <div>No Product</div>
                : stateProduct.map((item,index)=>{
                    return(
                        <ul>
                            <li key={index} onClick={()=>delProduct(item)}>{item.name}</li>
                        </ul>
                    )


                    })}
            </div>
        </div>
    );
};

export default Ban;