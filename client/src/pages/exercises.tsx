import React from "react";
import withLayout from "~/components/Layout";

function exercises() {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-2 text-3xl font-bold text-white ">Exercises</div>
        <p className="font-medium text-accent">
          Search from our extensive exercise catalog here.
        </p>
      </div>
    </div>
  );
}

export default withLayout(exercises);
