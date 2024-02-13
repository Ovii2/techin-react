import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList({ users, setUpdate }) {
  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id}>
          <UserCard user={user} setUpdate={setUpdate} />
        </div>
      ))}
    </div>
  );
}

export default UserList;
