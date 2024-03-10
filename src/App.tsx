import React from "react";
import "./App.css";

// import { Counter } from "./container/counter";
import { CartList } from "./container/cart";
import { useDispatch } from "react-redux";
import { add } from "./container/cart/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <input
          type="text"
          placeholder="add to cart"
          onBlur={(e) => dispatch(add({ title: e.target.value }))}
        />
        <CartList />
      </header>
    </div>
  );
}

export default App;
