import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../types";

interface UserContextValue {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  userLoaded: boolean;
  setUserLoaded: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  userLoaded: false,
  setUserLoaded: () => {},
});

interface UsersProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/authorized_user`)
      .then((r) => r.json())
      .then((user) => {
        updateUser(user);
        if (user) setUserLoaded(true);
      });
  }, []);

  const updateUser = (user: any) => setUser(user);

  return (
    <UserContext.Provider value={{ user, setUser, userLoaded, setUserLoaded }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
