// frontend/src/components/GoalList.jsx

function GoalList({ goals, onToggle, onDelete }) {
  console.log("Rendering goals:", goals);  // ✅ Add this

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
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span onClick={() => onToggle(goal.id)}>
                {goal.title} {goal.complete ? '✅' : '❌'}
              </span>
              <button onClick={() => onDelete(goal.id)} style={{ marginLeft: '1rem' }}>
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default GoalList;
