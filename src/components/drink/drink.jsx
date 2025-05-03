import { Layer } from '../layer/layer.jsx';
import './drink.css';

export const Drink = ({ id, name, image, layers, ordered }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={`http://localhost:4000${image}`} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>
      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value="2" />
        <button
          className={`${
            ordered ? 'order-btn--ordered order-btn' : 'order-btn'
          }`}
        >
          {ordered ? 'Zrušit ' : 'Objednat '}
        </button>
      </form>
    </div>
  );
};
