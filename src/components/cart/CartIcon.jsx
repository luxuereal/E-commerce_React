import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartStore } from "../../Features/cartStore";
import { AiOutlineHeart } from "react-icons/ai";
import productStore from "../../Features/productStore";

const CartIcon = () => {
  const itemsInCart = cartStore((state) => state.items);
  const openCart = cartStore((state) => state.openCart);
  const wishlist = productStore((state) => state.wishlist);

  return (
    <div className="hidden px-4 py-1 rounded-full cursor-pointer lg:block md:px-8">
      <div className="flex space-x-6 text-3xl duration-75">
        <div className="relative">
          <AiOutlineHeart className="duration-300 hover:scale-125" />
          <span className="absolute z-10 flex items-center justify-center w-4 h-4 p-3 text-xs text-white bg-red-700 rounded-full -right-4 -top-2">
            {wishlist.length}
          </span>
        </div>
        <div className="relative">
          <AiOutlineShoppingCart
            className="duration-300 hover:scale-125"
            onClick={() => openCart()}
          />
          <span className="absolute z-10 flex items-center justify-center w-4 h-4 p-3 text-xs text-white bg-red-700 rounded-full -right-4 -top-2">
            {itemsInCart.length}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartIcon;