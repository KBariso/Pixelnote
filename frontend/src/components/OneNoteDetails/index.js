import React from "react";

// import { useSelector } from "react-redux";

const NoteDetails = ({id, userId, title, content}) => {
  return (
    <div>
        {/* <h3>{userId}</h3> */}
        <h3>{title}</h3>
        {/* <p>{content}</p> */}
    </div>
  );
};

export default NoteDetails;
