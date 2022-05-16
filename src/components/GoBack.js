import React from "react";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btn btn-primary mb-4">
      {" "}
      {"<"}{" "}
    </button>
  );
}

export default GoBack;
