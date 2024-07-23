import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

export const UserForm = () => {
  const { setName } = useContext(UserContext);
  const [inputName, setInputName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);  // Set the name in context
    window.history.pushState({}, '', '/quiz');  // Change the URL without reloading the page
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);  // Dispatch a navigation event
  }

  const handleInputChange = (e) => {
    if (e.target.value) {
      setInputName(e.target.value.toUpperCase());
    }
    else {
      setInputName('');
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <p>Enter your name</p>
      <input type='text' value={inputName} onChange={handleInputChange} maxLength={19}></input>
      <button type='submit'>Start quiz</button>
    </form>
  )
}
