// frontend/src/components/GoalList.jsx

function GoalList({ goals, onToggle, onDelete }) {
  return (
    <div>
      <h2>My Goals 🐾</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {goals.length === 0 ? (
          <li>No goals yet.</li>
        ) : (
          goals.map((goal) => (
            <li
              key={goal.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <input
                type="checkbox"
                checked={goal.complete}
                onChange={() => onToggle(goal.id)}
                style={{ marginRight: '0.5rem' }}
              />
              <span
                style={{
                  textDecoration: goal.complete ? 'line-through' : 'none',
                  flexGrow: 1,
                }}
              >
                {goal.title}
              </span>
              <button
                onClick={() => onDelete(goal.id)}
                style={{ marginLeft: '1rem' }}
              >
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

