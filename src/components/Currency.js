import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-secondary'style={{ backgroundColor: "#61d172", color: 'white' }}> Currency {
      <select name="Currency" id="Currency" 
        style={{
            backgroundColor: "#61d172",
            color: 'white',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            borderRadius: '8px',
        }} 
      onChange={event=>changeCurrency(event.target.value)}>
        <option value="$" style={{ backgroundColor: "#61d172", color: '#5b5b5b' }}>$ Dolar</option>
        <option value="£" style={{ backgroundColor: "#61d172", color: '#5b5b5b' }}>£ Pound</option>
        <option value="€" style={{ backgroundColor: "#61d172", color: '#5b5b5b' }}>€ Euro</option>
        <option value="₹" style={{ backgroundColor: "#61d172", color: '#5b5b5b' }}>₹ Ruppee</option>
        <option value="R$" style={{ backgroundColor: "#61d172", color: '#5b5b5b' }}>R$ Real</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;