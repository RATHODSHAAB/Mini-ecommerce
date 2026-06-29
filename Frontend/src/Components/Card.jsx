export const Card = ({quantity ,product,removeFromCart ,onAddToCart}) => {
    

  return (
    <div className="w-72 rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden hover:shadow-xl">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-2xl font-bold text-green-600">
          {product.price}
        </p>
        
        {
            quantity === 0 ? (
              <button
                onClick={onAddToCart}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex justify-between items-center">
                <button onClick={removeFromCart}>-</button>
                <span>{quantity}</span>
                <button onClick={onAddToCart}>+</button>
              </div>
              )
            }
      </div>
    </div>
  );
};

