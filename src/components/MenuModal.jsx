import { useEffect, useState } from "react";
import "./_menuModal.scss";
import MenuItem from "./MenuItem";
import { IoCloseOutline } from "react-icons/io5";

const signatureDesserts = [
  {
    id: 1,
    dessert: "Cherry Bliss",
    price: "$6.50",
    description:
      "A creamy mini cheesecake topped with glossy cherry compote and whole cherries, perfectly balanced with a buttery biscuit base",
  },
  {
    id: 2,
    dessert: "Raspberry Velvet Dream",
    price: "$6.80",
    description:
      "A smooth and delicate cheesecake infused with raspberries, finished with a vibrant berry glaze and fresh toppings.",
  },
  {
    id: 3,
    dessert: "Berry Swirl Delight",
    price: "$5.90",
    description:
      "A soft sponge roll filled with silky cream and a rich berry jam spiral, creating a perfect harmony of sweetness and tang",
  },
  {
    id: 4,
    dessert: "Lemon Éclat",
    price: "$4.30",
    description:
      "A bright and airy macaron filled with luscious lemon cream, topped with a light whipped finish and elegant citrus notes",
  },
  {
    id: 5,
    dessert: "Golden Cinnamon Cloud",
    price: "$3.80",
    description:
      "A creamy mini cheesecake topped with glossy cherry compote and whole cherries, perfectly balanced with a buttery biscuit base",
  },
  {
    id: 6,
    dessert: "Twin Cinnamon Embrace",
    price: "$6.80",
    description:
      "Two perfectly baked cinnamon rolls with a caramelized swirl, soft texture, and a rich, aromatic finish",
  },
];

const bakerySelection = [
  {
    id: 7,
    dessert: "Classic Butter Croissant",
    price: "$3.20",
    description: "Flaky, golden layers with a rich buttery aroma",
  },
  {
    id: 8,
    dessert: "Almond Croissant",
    price: "$3.60",
    description: "Delicate pastry with melted dark chocolate inside",
  },
  {
    id: 9,
    dessert: "Vanilla Éclair",
    price: "$4.10",
    description: "Light choux pastry filled with smooth vanilla custard",
  },
  {
    id: 10,
    dessert: "Pain au Chocolat",
    price: "$3.60",
    description: "Delicate pastry with melted dark chocolate inside",
  },
  {
    id: 11,
    dessert: "Caramel Pecan Tart",
    price: "$4.90",
    description:
      "Crispy tart shell filled with rich caramel and roasted pecans",
  },
  {
    id: 12,
    dessert: "Blueberry Muffin",
    price: "$3.50",
    description: "Soft and moist muffin bursting with fresh blueberries",
  },
  {
    id: 13,
    dessert: "Banana Bread Slice",
    price: "$3.40",
    description:
      "Rich and tender loaf with natural sweetness and a hint of spice",
  },
  {
    id: 14,
    dessert: "Strawberry Shortcake",
    price: "$5.50",
    description: "Light sponge layered with cream and fresh strawberries",
  },
  {
    id: 15,
    dessert: "Chocolate Fudge Brownie",
    price: "$3.90",
    description: "Dense, rich chocolate square with a gooey center",
  },
  {
    id: 16,
    dessert: "Apple Cinnamon Tart",
    price: "$4.70",
    description: "Thinly sliced apples baked with cinnamon in a crisp crust",
  },
  {
    id: 17,
    dessert: "Pistachio Cake Slice",
    price: "$5.80",
    description: "Moist cake with delicate nutty flavor and creamy finish",
  },
  {
    id: 18,
    dessert: "Honey Layer Cake",
    price: "$5.60",
    description: "Soft honey-infused layers with light cream filling",
  },
  {
    id: 19,
    dessert: "Orange Madeleine",
    price: "$2.80",
    description: "Soft French butter cakes with a delicate citrus glaze",
  },
  {
    id: 20,
    dessert: "Matcha Cheesecake",
    price: "$6.20",
    description: "Creamy cheesecake with a subtle green tea flavor",
  },
];

const beverages = [
  {
    id: 21,
    dessert: "Espresso",
    price: "$2.50",
    description: "Bold and intense single shot",
  },
  {
    id: 22,
    dessert: "Americano",
    price: "$3.00",
    description: "Espresso diluted with hot water for a smooth taste",
  },
  {
    id: 23,
    dessert: "Cappuccino",
    price: "$3.80",
    description: "Perfect balance of espresso, steamed milk, and foam",
  },
  {
    id: 24,
    dessert: "Latte",
    price: "$4.00",
    description: "Creamy milk coffee with a gentle espresso base",
  },
  {
    id: 25,
    dessert: "Flat White",
    price: "$4.20",
    description: "Velvety texture with a rich coffee flavor",
  },
  {
    id: 26,
    dessert: "Mocha",
    price: "$4.50",
    description: "Chocolate-infused coffee with steamed milk",
  },
  {
    id: 27,
    dessert: "Caramel Latte",
    price: "$4.70",
    description: "Smooth latte with sweet caramel notes",
  },
  {
    id: 28,
    dessert: "Matcha Latte",
    price: "$4.60",
    description: "Creamy green tea drink with a soft earthy flavor",
  },
  {
    id: 29,
    dessert: "Hot Chocolate",
    price: "$4.30",
    description: "Rich and comforting chocolate drink",
  },
  {
    id: 30,
    dessert: "Tea Selection",
    price: "$3.20",
    description: "CBlack, green, and herbal blends",
  },
];

function MenuModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  if (isOpen) {
    return (
      <div className="modal__overlay">
        <div className={`modal ${isClosing ? "is-closing" : ""}`}>
          <button
            className="btn__close close"
            onClick={() => {
              setIsClosing(true);
            }}
          >
            <IoCloseOutline size={28} />
          </button>
          <img className="line" src="/img/line.png" />
          <div className="modal__header">
            <h1 className="heading__accent-lg">The Daily Crumb Menu</h1>
            <img className="image" src="/img/menu_bg3.png" />
          </div>
          <div className="modal__body">
            <h3 className="heading_main_dark-sm">Signature Desserts</h3>
            <div className="modal__grid">
              {signatureDesserts.map((item) => (
                <MenuItem
                  key={item.id}
                  dessert={item.dessert}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
            <div className="modal__grid">
              <div>
                <h3 className="heading_main_dark-sm">Bakery Selection</h3>
                {bakerySelection.map((item) => (
                  <MenuItem
                    key={item.id}
                    dessert={item.dessert}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="col">
                <h3 className="heading_main_dark-sm">Coffee & Drinks</h3>
                {beverages.map((item) => (
                  <MenuItem
                    key={item.id}
                    dessert={item.dessert}
                    description={item.description}
                    price={item.price}
                  />
                ))}
                <img className="modal__corner-img" src="/img/menu_bg2.png" />
              </div>
            </div>
          </div>
          <img className="line line--bottom" src="/img/line.png" />
        </div>
      </div>
    );
  }
}

export default MenuModal;
