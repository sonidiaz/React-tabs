import React, {useEffect, useState} from "react";
import "./Comments.css";

const Comments = ({ name, email, comment }) => {
  return (
      <li className="itemsListParent list-item">
        <div className="detail">
        <label htmlFor="Nombre"><strong>Name:</strong></label>
          <h2>{name}</h2>
        </div>
        <div className="detail">
          <label htmlFor="Nombre"><strong>Email:</strong></label>
          <h3>{email}</h3>
        </div>
        <div className="detail">
          <label htmlFor="Nombre"><strong>Comments:</strong></label>
          <p>{comment}</p>  
        </div>
      </li>
  );
};

export { Comments };
