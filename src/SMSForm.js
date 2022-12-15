import React, { useState } from 'react';
import './SMSForm.css';

function SMSForm () {
  const [inputs, setInputs] = useState({});
  const [checkAll, setCheckedAll] = useState(false);

  const onHandleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
	  const value = event.target.value;

	  setInputs(values => ({...values, [name]: value}))
  };


  const onSubmit = (event) => {
    event.preventDefault();

    
    if(checkAll === true ) {
      fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      })
    }
    else {
      
    }
    
  };


  return (
    <form onSubmit={onSubmit} className="form-div">
      <div className='radio-div'>
        <label>All Clients<input name="towho" type="radio" onClick={()=> setCheckedAll(true)}></input></label>
        <label>A Single Client<input name="towho" type="radio" onClick={()=> setCheckedAll(false)}></input></label>
      </div>
      <div style={{display: checkAll ? "none" : "inline"}}>
        <input
          type="tel"
          placeholder="8889991111"
          name="to"
          value={inputs.to || ""}
          onChange={onHandleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          name="message"
          rows={15}
          value={inputs.message || ""}
          onChange={onHandleChange}
        />
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}

export default SMSForm;