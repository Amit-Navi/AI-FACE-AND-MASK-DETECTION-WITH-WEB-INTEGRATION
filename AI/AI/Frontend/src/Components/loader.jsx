import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ type }) {
  return (
    <div className="z-[100] fixed h-[100vh] w-[100vw] flex items-center justify-center">
      {
        type == "XYZ" ?
          <p className="text-4xl pr-[2rem]">Image is Being Uploaded...</p> : null
      }
      <ClipLoader
        color="blue"
        size={80}
      />
    </div>
  );
}

export default Loader;