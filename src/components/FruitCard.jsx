const FruitCard = ({ fruit }) => {
  return (
    <div>
      <img
        alt={fruit.name}
        width="250px"
        src="https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/assorted%20fruit%20photo-6825-8b8e196d9d5fd4470911d69ad25fa5e0@1x.jpg"
      ></img>
      <h3 key={fruit.id}>{fruit.name}</h3>
    </div>
  );
};

export default FruitCard;
