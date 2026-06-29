import { CartItems } from "../Components/CartItem"
import { Navbar } from "../Components/Navbar"
import axios from "axios"

export const Cart = ({addToCart, removeFromCart, totalPrice, cart}) => {
  const handlePay = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/payment/create-order",
      { amount: totalPrice }
    );

    const order = res.data.order;
    console.log(res.data)
    console.log(order)

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      
      amount: order.amount,
      currency: "INR",
      name: "Mini Ecommerce",
      order_id: order.id,

      handler: async function (response) {
        // VERIFY PAYMENT HERE
        const verifyRes = await axios.post(
          "http://localhost:3000/api/payment/verify-payment",
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }
        );
         


          if (verifyRes.data.success) {
          alert("Payment Successful");
        } else {
          alert("Payment Failed");
        }
      },
    };
    

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.log(error);
  }
};

    return (
        <>
        <Navbar></Navbar>
        {cart.map((item) => (
        <CartItems
          key={item.id}
          item={item}
          addToCart={() => addToCart(item)}
          removeFromCart={() => removeFromCart(item)}
        />
      ))}
        
         {/* Total Price Section */}
      <div className="w-[70%] mx-auto bg-white shadow-md rounded-xl p-6 mt-6 mb-10">
        <h2 className="text-2xl font-bold text-right">
          Total Price: ₹{totalPrice}
        </h2>
      </div>
      <div className="w-[70%] mx-auto text-right ">
        <button onClick={handlePay} className="bg-green-600 text-white font-semibold p-4 rounded-xl">
              Pay Now
          </button>
      </div>
    
        </>
    )
}

