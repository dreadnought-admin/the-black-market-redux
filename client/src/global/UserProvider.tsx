import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../types";

interface UserContextValue {
  user: User | boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  userLoaded: boolean;
  setUserLoaded: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextValue>({
  user: false,
  setUser: () => {},
  userLoaded: false,
  setUserLoaded: () => {},
});

interface UsersProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [user, setUser] = useState(false);

  const [userLoaded, setUserLoaded] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, userLoaded, setUserLoaded }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
