import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl hover:text-gray-400">
          <FaHome size={24} />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="text-white hover:text-gray-400 relative"
          >
            <FaShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-400">
            <FaUser size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
