import "./_menuItem.scss";

function MenuItem({ dessert, price, description }) {
  return (
    <div className="item">
      <div className="item__row">
        <p className="heading_sub_dark-sm">{dessert}</p>
        <span className="heading_sub_dark-sm">{price}</span>
      </div>
      <div>{description}</div>
    </div>
  );
}

export default MenuItem;
