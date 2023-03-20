import { IMG_CDN_URL } from "./Constant";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{totalRatingsString} Stars</h4>
    </div>
  );
};
export default RestaurantCard;
