import "../styles/Dish.css";
function Dish({ title, price, ingredients, category }) {
  return (
    <section id="card">
      <h2 id="title">
        {title}
        <span id="price">{price}</span>
      </h2>
      <p id="ingredients">{ingredients}</p>
      <p id="ingredients">{category}</p>
    </section>
  );
}
export default Dish;
