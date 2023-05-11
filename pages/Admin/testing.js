import { useState } from 'react';
import axios from 'axios';

export default function UserProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('/api/profile', {
        name,
        email,
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
}
