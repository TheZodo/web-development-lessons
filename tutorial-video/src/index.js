import React from "react";
import reactDom from "react-dom";
import App from "./App";

function Greeting() {
  return <App />;
}

const Book = () => {
  return (
    <div>
      <IconButton src={<House />} />
      <Image></Image>
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41n9-p6-PpL.jpg"
      alt="There"
      width={"15%"}
    />
  );
};

const Title = () => {
  return <h1>Reminders of him</h1>;
};
const Author = () => <h4>Colleen Hoover</h4>;

reactDom.render(<Greeting />, document.getElementById("root"));
