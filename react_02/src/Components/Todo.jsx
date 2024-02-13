import PropTypes from "prop-types";

function Todo({ todo }) {
  const { id, title, completed } = todo;

  if (completed) return null;

  return (
    <div className="todo">
      <ul>
        <li>
          Nr:{id} Title: {title}
        </li>
      </ul>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
