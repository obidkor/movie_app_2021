// 이거는 원래 없던거인데 내가 적음. 이게 없으면... jsx가 있는 컴포넌트를 사용하는 것을 이해못한다는데 업데이트된거같다, 없어도된다.
// import React from "react";
// Potato는 새로만든 컴포넌트인데 App이라는 큰 컴포넌트안에 return 안에 JSX인 "<Potato />"를 넣어주니 들어가더라..
//import Potato from "./Potato";
// 전달받은 props가 내가 원하는 props인지 체크해줌.
import PropTypes from "prop-types";

// 컴포넌트는 Javascript object(array)를 props로 가져갈수 있당!
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    //rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.6,
  },
];

// 컴포넌트는 재사용이 된다. html코드안에 js를 쓰고 싶으면 {}를 하고 안에 코드 작성 ㄱㄱ.
//function Foodd(props)도 된다.
function Food({ name, picture, rating }) {
  // 아래 처럼 매개변수를 리턴할 html에 넣는것도가능하다.
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

// yarn add prop-types => 전달받은 props가 내가 원하는 props인지 체크해줌. 뭐.. props 이름이 잘못됏다던가 그런가..
// 여기에는 내가 얻고싶은 props의 설명을 적느다.
// Food.propTypes는 p가 소문자로 시작, 이거는 고정임 리액트가 그렇게 만들어짐, array.propTypes로 해야 체크가능.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

//react는 밀어넣는다 무엇을? virtual dom에 html코드를.. // 컴포넌트는 대문자로 시작해야함.
//react는 컴포넌트 안에 prop을 넣어서 정보를 전달할 수 있따. 바로 컴포넌트안에 매개변수로 넣어주면 된다.(props -> 컴포넌트의 매개변수)
// App -> Food(child)로 props를 통해 정보를 보냄.
// html 안에 {jsarray.map(obj =>( <component props = {~~~}/>))}로 동적으로 컴포넌트를 생성할수 잇따!
// Warning: Each child in a list should have a unique "key" prop. ==> 이게 발생한 원인은? 리액트의 각 컴포넌트는 유일한 키값을 가지고 있어야한다.(key prop이 겹치면 안됨.)
function App() {
  return (
    <div>
      <h1>heeol</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
