const ShimmerUI = () => {
  return (
    <>
      <div className="restro_cards">
        {Array(15)
          .fill("")
          .map((shimmerCard, index) => (
            <div key={index} className="shimmer_card"></div>
          ))}
      </div>
    </>
  );
};
export default ShimmerUI;
