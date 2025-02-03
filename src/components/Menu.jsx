import Dish from "./Dish";
function Menu({ menu }) {
  // Listekomponent (Menu): Denne komponenten mottar matrettene som props og viser dem i en liste.
  return (
    <>
      <h1>Meny:</h1>
      <ul>
        {menu.map((dish) => (
          <Dish
            key={dish.id}
            title={dish.tittel}
            price={dish.pris}
            ingredients={dish.ingredienser}
            category={dish.kategori}
          />
        ))}
      </ul>
    </>
  );
}
export default Menu;
