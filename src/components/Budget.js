import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [quantity, setQuantity] = useState('');
    const [name, setName] = useState('');
    
    
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    const item = {
            name: name,
            quantity: parseInt(quantity),
        };
    
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency} : {budget}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
