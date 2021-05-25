import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// 평범한 <a href="">를 쓰게 되면 html이 리플레쉬되어 리액트가죽가된다.
// react-router-dom의 Link를 쓰자
// Link는 <HashRouter>와 같은 Router의 child이어야 작동한다.
// <Link>의 "to" props에 {}(object)를 넘길수 있다. 여기에서 state(props)를 넘길수 있다.(click하면)
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
