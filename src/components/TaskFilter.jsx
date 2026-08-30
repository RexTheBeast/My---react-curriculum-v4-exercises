export default function TaskFilter({ currFilter, onChange }) {
  return (
    <div>
      <button onClick={() => onChange('all')}>All</button>
      <button onClick={() => onChange('completed')}>Completed</button>
      <button onClick={() => onChange('pending')}>Pending</button>

      <p>Current filter: {currFilter}</p>
    </div>
  );
}
