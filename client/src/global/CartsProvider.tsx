import {
    createContext,
    useState,
    useEffect,
    useContext,
    Dispatch,
    SetStateAction,
  } from "react";
  import { UserContext } from "./UserProvider";
  import { Cart } from "../types";

  interface CartContextValue {
    cart: Cart[];
    setCart: Dispatch<SetStateAction<Cart[]>>;
    cartLoaded: boolean;
    cartNumber: number;
    setCartNumber: Dispatch<SetStateAction<number>>;
    cartTotal: number;
    setCartTotal: Dispatch<SetStateAction<number>>;
  }

  const CartContext = createContext<CartContextValue>({
    cart: [],
    setCart: () => {},
    cartLoaded: false,
    cartNumber: 0,
    setCartNumber: () => {},
    cartTotal: 0,
    setCartTotal: () => {}
  });

  interface CartProviderProps {
    children: React.ReactNode; 
  }

  const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const { user } = useContext(UserContext);

    const [cart, setCart] = useState<Cart[]>([]);
    const [cartNumber, setCartNumber] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartLoaded, setCartLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/shopping_cart")
        .then((r) => r.json())
        .then((data) => {
          setCartNumber(data.total_items);
          setCartTotal(data.total_price);
          setCart(data.records)
        })
      }, []);

      return (
        <CartContext.Provider value={{
            cart, setCart, cartNumber,
            setCartNumber, cartTotal, setCartTotal,
            cartLoaded
        }}>
          {children}
        </CartContext.Provider>
      );
    };

  export { CartContext, CartProvider };

