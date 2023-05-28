import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const options = [
    { value: '$', label: '$ Dolar' },
    { value: '£', label: '£ Pound' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Ruppee' },
    { value: 'R$', label: 'R$ Real' },
  ];

  const changeCurrency = (selectedOption) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedOption.value,
    });
  };

  return (
    <div className="col-sm alert select-container" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#61d172', color: 'white' }}>
      Currency:{' '}
      <Select
        options={options}
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: '#61d172',
            color: 'white',
            border: 'none',
            outline: 'none',
            borderRadius: '10px',
          }),
          singleValue: (provided) => ({
            ...provided,
            color: 'white',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'white' : '#61d172',
            color: state.isFocused ? 'green' : '#5b5b5b',
          }),
        }}
        onChange={changeCurrency}
        defaultValue={options.find((option) => option.value === '$')}
      />
    </div>
  );
};

export default Currency;
