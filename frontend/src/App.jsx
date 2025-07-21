import { useEffect, useState } from 'react';
import AddGoalForm from './components/AddGoalForm';
import GoalList from './components/GoalList';
import client from './api/client';

function App() {
  const [goals, setGoals] = useState([]);

  // Load goals on app load
  useEffect(() => {
    client.get('/goals')
      .then(res => setGoals(res.data))
      .catch(err => console.error('Error loading goals:', err));
  }, []);

  // Add a new goal to the list
  const handleGoalAdded = (newGoal) => {
    setGoals(prev => [...prev, newGoal]);
  };

  // Toggle 'complete' status
  const toggleGoalComplete = async (goalId) => {
    try {
      const res = await client.patch(`/goals/${goalId}`);
      const updatedGoal = res.data;
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        )
      );
    } catch (err) {
      console.error("Error toggling goal:", err);
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pawductive 🐱</h1>
      <AddGoalForm onGoalAdded={handleGoalAdded} />
      <GoalList goals={goals} onToggle={toggleGoalComplete} />
    </div>
  );
}

export default App;
