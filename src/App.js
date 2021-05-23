// 이거는 원래 없던거인데 내가 적음. 이게 없으면... jsx가 있는 컴포넌트를 사용하는 것을 이해못한다는데 업데이트된거같다, 없어도된다.
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

// Router만들꺼임 주소에 따라 렌더링할 컴포넌트 지정(네비게이션 바)
// Route props에 path에 주소, component에 컴포넌트를 넣자
// path에 주소가 겹치면(ex /home과 /introduction 두개가 /home/introduction 이렇게 합쳐지면 Route 밑의 두개의 컴포넌트가 렌더링된다.)
// 위의 경우 exact=true props를 넣어주면 url이 정확히 일치할때만 Route가 렌더링된다.
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
