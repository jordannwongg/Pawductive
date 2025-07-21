// frontend/src/components/GoalList.jsx

function GoalList({ goals, onToggle }) {
  return (
    <div>
      <h2>My Goals 🐾</h2>
      <ul>
        {goals.length === 0 ? (
          <li>No goals yet.</li>
        ) : (
          goals.map((goal) => (
            <li
              key={goal.id}
              onClick={() => onToggle(goal.id)}
              style={{ cursor: 'pointer' }}
            >
              {goal.title} {goal.complete ? '✅' : '❌'}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default GoalList;
