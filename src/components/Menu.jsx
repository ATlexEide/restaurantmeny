import Dish from "./Dish";
function Menu({ menu }) {
  // Listekomponent (Menu): Denne komponenten mottar matrettene som props og viser dem i en liste.
  return (
    <>
      <ul>
        {menu.map((dish) => (
          <Dish
            key={dish.id}
            title={dish.tittel}
            price={dish.price}
            ingredients={dish.ingredienser}
            category={dish.kategori}
          />
        ))}
      </ul>
    </>
  );
}
export default Menu;
