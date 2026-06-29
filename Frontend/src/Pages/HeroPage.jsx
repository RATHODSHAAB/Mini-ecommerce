
import { Card } from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { products } from "../Components/product";

export const HeroPage = ({totalCartItems,cartInfoToCard,removeFromCart, cart  , addToCart}) => {






  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar  totalCartItems={totalCartItems}/>

      <div className="p-8 grid grid-cols-4 gap-6">
       {products.map((product) => (
        <Card 

        key={product.id}
        quantity={cartInfoToCard(product)}
        product={product}
        removeFromCart = {() => removeFromCart(product)}
        onAddToCart = {() => addToCart(product)}
        ></Card>
    ))}

    {console.log(cart)}
        
      </div>
    </div>
  );
};