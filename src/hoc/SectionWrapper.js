import React from "react";

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <div id={idName} className="max-w-7xl mx-auto p-5">
      <Component />
    </div>
  );
};

export default SectionWrapper;
