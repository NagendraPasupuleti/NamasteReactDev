import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constant";
const RestuarantDetails = () => {
  const [restuarant, setRestuarant] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getRestuarant();
  }, []);

  async function getRestuarant() {
    const restro = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6869192&lng=83.2185599&restaurantId=66796&submitAction=ENTER"
    );
    const json = await restro.json();
    console.log(json.data.cards[0].card.card.info);
    setRestuarant(json.data.cards[0].card.card.info);
  }
  return (
    <div>
      <h3>{restuarant.name}</h3>
      <img src={IMG_CDN_URL + restuarant.cloudinaryImageId} />
      <h3>{restuarant.areaName}</h3>
      <h3>{restuarant.costForTwo}</h3>
    </div>
  );
};

export default RestuarantDetails;
