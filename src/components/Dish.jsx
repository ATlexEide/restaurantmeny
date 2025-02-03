function Dish({ title, price, ingredients, category }) {
  // Kortkomponent (Dish): Denne komponenten mottar data for én matrett som props og viser dem i et kortformat. Bruk feltene for tittel, pris, ingredienser og kategori i visningen.
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
