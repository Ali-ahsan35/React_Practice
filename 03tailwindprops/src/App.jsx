import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "hitesh",
    age: 24,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-500 p-4 rounded mb-4">Tailwind test</h1>
      <Card userName="Hitesh" btnText = "Click Me"/>
      {/* <Card/> */}
    </>
  );
}

export default App;
