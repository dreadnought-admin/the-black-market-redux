// import {
//     createContext,
//     useState,
//     useEffect,
//     Dispatch,
//     SetStateAction,
//   } from "react";
//   import { Watch } from "../types";

//   interface WatchContextValue {
//     watch: Watch | null;
//     setUser: Dispatch<SetStateAction<Watch | null>>;
//   }
  
//   const WatchContext = createContext<WatchContextValue>({
//     watch: null,
//     setWatch: () => {},
//   });
  
  
//   interface UsersProviderProps {
//     children: React.ReactNode;
//   }
  
//   const UserProvider: React.FC<UsersProviderProps> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
  
//     const [userLoaded, setUserLoaded] = useState(false);
  
//     useEffect(() => {
//       fetch(`/authorized_user`)
//         .then((r) => r.json())
//         .then((user) => {
//           setUser(user);
//           if (user) setUserLoaded(true);
//         });
//     }, []);
  
//     return (
//       <UserContext.Provider value={{ user, setUser, userLoaded, setUserLoaded }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };
  
//   export { UserContext, UserProvider };