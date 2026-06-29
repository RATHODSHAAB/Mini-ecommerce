export const CartItems = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="w-[70%] mx-auto bg-white shadow-md rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <h2 className="text-lg font-semibold">
              {item.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={removeFromCart}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            -
          </button>

          <span className="font-semibold">{item.quantity}</span>

          <button
            onClick={addToCart}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        <div className="text-xl font-bold text-green-600">
          ₹{item.price}
        </div>
      </div>
    </div>
  );
};