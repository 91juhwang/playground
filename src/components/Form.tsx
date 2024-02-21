import { useState, ChangeEvent } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');


  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    const value = (event.target as HTMLInputElement).value;
    setUsername(value);
  }

  const handleSubmit = () => {
    console.log('submit');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <button type="submit">Submit</button>
    </form>
  );
}