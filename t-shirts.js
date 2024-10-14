const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: './images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: './images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: './images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: './images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: './images/grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: './images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: './images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: './images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: './images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

const TshirtStore = () => {
  const [stockData, setStockData] = React.useState(tshirts);

  const handleBuy = (index, quantity) => {
    const updatedStockData = stockData.map((tshirt, i) => {
      if (i === index) {
        const newStock = tshirt.stock - quantity;
        return { ...tshirt, stock: newStock > 0 ? newStock : 0 };
      }
      return tshirt;
    });
    setStockData(updatedStockData);
  };

  return (
    <div className="tshirt-store">
      {stockData.map((tshirt, index) => (
        <div key={tshirt.title} className="tshirt-item">
          <img src={tshirt.image} alt={tshirt.title} />
          <h3>{tshirt.title}</h3>
          <p>Price: ${tshirt.price.toFixed(2)}</p>
          {tshirt.stock > 0 ? (
            <React.Fragment>
              <p>{tshirt.stock} left!</p>
              <select
                value={tshirt.quantity}
                onChange={(e) => {
                  const updatedQuantity = parseInt(e.target.value, 10);
                  const updatedStockData = [...stockData];
                  updatedStockData[index].quantity = updatedQuantity;
                  setStockData(updatedStockData);
                }}
              >
                {[...Array(tshirt.stock).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <button onClick={() => handleBuy(index, tshirt.quantity)}>Buy</button>
            </React.Fragment>
          ) : (
            <p>Out of Stock</p>
          )}
        </div>
      ))}
    </div>
  );
};

// Render the React component
ReactDOM.render(<TshirtStore />, document.getElementById('root'));
