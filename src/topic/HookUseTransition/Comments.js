import React from "react";

const Comments = ({ entities = [] }) => {
  return (
    <ul>
      {entities.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export { Comments };
