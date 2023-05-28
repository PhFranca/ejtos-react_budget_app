import React, { useContext, useEffect, useCallback } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const setBudget = useCallback(
        (val) => {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            });
        },
        [dispatch]
    );

    useEffect(() => {
        setBudget(2000);
    }, [setBudget]);

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ width: '120px', marginLeft: '4px' }}
                    onChange={(event) => setBudget(event.target.value)}
                />
            </span>
        </div>
    );
};

export default Budget;