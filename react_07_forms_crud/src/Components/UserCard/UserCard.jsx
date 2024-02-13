import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { getOne } from "../../services/get";
import { updateData } from "../../services/update.js";
import { deleteData } from "../../services/delete";
import { useState } from "react";
import Form from "../Form/Form.jsx";
import "./UserCard.css";

function UserCard({ user, setUpdate }) {
  const [edit, setEdit] = useState(false);
  const { userName, userEmail, channel, likes } = user;

  const deleteHandler = async (id) => {
    await deleteData(id);
    setUpdate((update) => update + 1);
  };

  const likesHandler = async (id) => {
    const user = await getOne(id);
    const { likes } = user;
    await updateData(id, { likes: likes + 1 });
    setUpdate((update) => update + 1);
  };

  const dislikesHandler = async (id) => {
    const user = await getOne(id);
    const { likes } = user;
    if (likes > 0) {
      await updateData(id, { likes: likes - 1 });
      setUpdate((update) => update - 1);
    }
  };

  return (
    <div className="user-card">
      <div className="card-body">
        <h2>{userName}</h2>
        <p>{userEmail}</p>
        <p>{channel}</p>
        <p>{likes}</p>
        <button onClick={() => deleteHandler(user.id)}>delete</button>
        <button onClick={() => setEdit((edit) => !edit)}>Edit user details</button>
        {edit && <Form user={user} setUpdate={setUpdate} setEdit={setEdit} />}
      </div>
      <FontAwesomeIcon className="like" icon={faThumbsUp} onClick={() => likesHandler(user.id)} />
      <FontAwesomeIcon
        className="dislike"
        icon={faThumbsDown}
        onClick={() => dislikesHandler(user.id)}
      />
    </div>
  );
}

export default UserCard;
