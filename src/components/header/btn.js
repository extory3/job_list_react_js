import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

function Btn() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick} name="button">
      Post a Job
    </button>
  );
}
export default Btn;
