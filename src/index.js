import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// "<App />"는 컴포넌트임.
// component : html 코드를 반환하는 함수 -> 컴포넌트를 사용해서 html처럼 사용함. -> Js + html = JSX(컴포넌트를 사용하는 방법)
// JSX : html inside of javascript
// render은 하나의컴포넌트만 렌더링가능
// 그러나 Application 컴포넌트 안에 많은 컴포넌트를 넣을수 있고 그 안에다시 더 많은 컴포넌트를 넣을 수 있다.(import로)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
