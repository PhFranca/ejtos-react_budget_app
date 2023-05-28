import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const calculateTotalExpenses = (expenses) => {
  return expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
};

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(2000);
  const [totalExpenses] = useState(calculateTotalExpenses(expenses));

  const onChangeBudget = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const updateBudget = () => {
    const parsedValue = parseInt(inputValue);

    if (Number.isNaN(parsedValue)) {
      alert('Please enter a valid number.');
      return;
    }

    if (!Number.isInteger(parsedValue)) {
      alert('Please enter an integer number.');
      return;
    }

    if (parsedValue < totalExpenses) {
      alert(
        "The value of the budget can't be lower than the expenses value " +
          currency +
          totalExpenses
      );
    } else if (parsedValue !== budget) {
      if (parsedValue > BUDGET_MAX_VALUE) {
        alert('Please enter a value less than ' + BUDGET_MAX_VALUE);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: parsedValue,
      });
    }
  };

  useEffect(() => {
    setInputValue(budget || 2000);
  }, [budget]);

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={inputValue}
          step="10"
          onChange={onChangeBudget}
          onBlur={updateBudget}
        ></input>
      </div>
    </div>
  );
};

export default Budget;
