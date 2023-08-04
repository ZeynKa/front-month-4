import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from "./components/Timer";
import Squers from "./components/Squers";
import Registration from "./components/Registration";
import ToDo from "./components/ToDo";
import Slider from "./components/Slider";
import TodoApp from "./components/TodoApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
    <Squers />
    <ToDo />
    <Registration />
    <Slider />
    <TodoApp />

  </React.StrictMode>
);

