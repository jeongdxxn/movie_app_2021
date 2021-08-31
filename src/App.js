import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615",
    rating: 5
  },
  {
    id:2,
    name: "Kimchi",
    image:
      "https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051__340.jpg",
    rating: 4.5
  },
  {
    id:3,
    name: "Kimchi",
    image:
      "https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207__480.jpg",
    rating: 3.5
  },
  {
    id:4,
    name: "Kimchi",
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/08/30/market-1971125__340.jpg",
    rating: 4
  },
  {
    id:5,
    name: "Kimchi",
    image:
      "https://cdn.pixabay.com/photo/2017/01/11/08/22/republic-of-korea-1971117__480.jpg",
    rating: 4.5
  },
]

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
      <h4>{rating}/5.0</h4>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
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
