import "../styles/Dish.css";
function Dish({ title, price, ingredients, category }) {
  return (
    <>
      <h2>
        {title}
        <span>{price}</span>
      </h2>
      <p>{ingredients}</p>
      <p>{category}</p>
    </>
  );
}
export default Dish;
