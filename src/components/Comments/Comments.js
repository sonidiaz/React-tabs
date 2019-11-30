import React from "react";
import "./Comments.css";

const Comments = ({ name, email, comment, idx }) => {
  return (
    <li className="itemsListParent" key={idx} name={name} email={email}>
      <span>Estos son los comentarios para el post con id </span>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <p>{comment}</p>
    </li>
  );
};

export { Comments };
