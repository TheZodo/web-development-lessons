import React from "react";

function App() {
  return (
    <div>
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <div>
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

export default App;
