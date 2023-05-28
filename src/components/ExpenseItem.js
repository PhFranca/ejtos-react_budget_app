import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch , Currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
            const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
        const decreaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency}{props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
            <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
