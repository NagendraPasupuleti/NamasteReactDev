import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="01" key="02">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h3>Namaste Functional HeaderComponent</h3>
      <h4>Heading 4</h4>
    </div>
  );
};
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
