import { useState } from 'react';
import client from '../api/client';

function AddGoalForm({ onGoalAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  // important to prevent page reload

    if (!title.trim()) return;

    try {
      const res = await client.post('/goals', { title });
      onGoalAdded(res.data);
      setTitle('');
    } catch (err) {
      console.error('Error adding goal:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New goal..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
