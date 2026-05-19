import { useEffect } from "react";
import "./_menu.scss";
import MenuModal from "../components/MenuModal";
const items = [
  {
    id: 1,
    title: "Cherry Bliss",
    name: "A creamy mini cheesecake with glossy cherry topping and whole cherries",
  },
  {
    id: 2,
    title: "Raspberry Velvet Dream",
    name: "A smooth and delicate cheesecake infused with raspberries and berry glaze",
  },
  {
    id: 3,
    title: "Berry Swirl Delight",
    name: "A soft sponge roll filled with silky cream and a rich berry jam spiral",
  },
  {
    id: 4,
    title: "Lemon Éclat",
    name: "A bright and airy macaron filled with luscious lemon cream",
  },
  {
    id: 5,
    title: "Golden Cinnamon Cloud",
    name: "A warm, fluffy cinnamon roll drizzled with silky glaze",
  },
  {
    id: 6,
    title: "Twin Cinnamon Embrace",
    name: "Two perfectly baked cinnamon rolls with a caramelized swirl",
  },
];

function Menu({ isOpen, handleOpen }) {
  const doubled = [...items, ...items];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div id="menu" className="menu section">
      <div className="menu__title">
        <h1 className="heading_sub_light-md">This month's </h1>
        <span className="heading_main_light-lg text-flicker decor">
          specials
        </span>
      </div>

      <div className="menu__carousel">
        <div className="menu__track">
          {doubled.map((item, index) => (
            <div className="menu__card" key={index}>
              <div className="menu__card--sketch">
                <img
                  src={`/img/pencil_pastry${item.id}.png`}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </div>
              <div className="menu__card--photo">
                <img src={`/img/pastry${item.id}.png`} />
                <span className="menu__card--label">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu__footer">
        <button
          className="btn btn-sketch heading_sub_light-lg text-flicker"
          type="button"
          onClick={() => handleOpen(true)}
        >
          See the menu
          <svg className="btn-sketch__circle" viewBox="0 0 100 40">
            <ellipse cx="50" cy="21" rx="48" ry="18" />
          </svg>
        </button>

        <MenuModal isOpen={isOpen} onClose={() => handleOpen(false)} />
      </div>
    </div>
  );
}

export default Menu;

//
