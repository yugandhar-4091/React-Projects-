export default function TodoFilters({ setFilter, stats, clearCompleted }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>
        All {stats.total}
      </button>

      <button onClick={() => setFilter("active")}>
        Active {stats.active}
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed {stats.completed}
      </button>

      {stats.completed > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
}
