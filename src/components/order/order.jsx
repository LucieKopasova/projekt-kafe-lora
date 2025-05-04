/* export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objedávnka</h1>
        <div className="order__items">
          {items.data.map((item) => (
            <OrderItem key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </main>
  );
}; */

export const Order = ({ items }) => {
  const jsouObjednavky = items?.data?.length > 0;
  if (jsouObjednavky) {
    return (
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <div className="order__items">
            {items.data.map((item) => (
              <OrderItem key={item.id} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objedávnka</h1>
        <p className="empty-order">Zatím nemáte nic objednáno</p>
      </div>
    </main>
  );
};

const OrderItem = ({ name, image }) => {
  console.log(name);
  return (
    <div className="order-item">
      <img
        src={`http://localhost:4000${image}`}
        className="order-item__image"
      />
      <div className="order-item__name">{name}</div>
    </div>
  );
};
