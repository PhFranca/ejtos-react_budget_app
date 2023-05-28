import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle,FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch , currency } = useContext(AppContext);

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
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='1.5em' color="#61d172" onClick={event=> increaseAllocation(props.name)}>+</FaPlusCircle></td>
            <td><FaMinusCircle size='1.5em' color="#c4372a" onClick={event=> decreaseAllocation(props.name)}>-</FaMinusCircle></td>
            <td><TiDelete size='1.5em' color="red" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
