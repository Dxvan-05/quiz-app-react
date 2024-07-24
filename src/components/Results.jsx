import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, image, onClick }) {
  
    const { name } = useContext(UserContext);


  return (
    <div id="results">
      <p>
        <strong>{name}</strong>,&nbsp; your element is:&nbsp; {element}
      </p>
      {image ? (
        <img src={image} alt={element} />
      ) : (
        <p>No images found.</p>
      )}

      <button onClick={onClick}>Reset</button>
    </div>
  );
}