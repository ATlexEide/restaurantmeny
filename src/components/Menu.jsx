import Dish from "./Dish";
import "../styles/Menu.css";
function Menu({ menu }) {
  // Listekomponent (Menu): Denne komponenten mottar matrettene som props og viser dem i en liste.
  return (
    <>
      <h1 id="title">Meny</h1>
      <ul id="menu">
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
