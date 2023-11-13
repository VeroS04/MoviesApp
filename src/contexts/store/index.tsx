
import { createContext, FC, ReactNode, useState } from "react";
import { servicesUser } from "../../services/users";
import { User } from "../../types";

type ContextType = {
  users: User[];
  loadUsers: () => void;
};
type ProviderType = { children: ReactNode };

const StoreContext = createContext<ContextType>({
  users: [],
  loadUsers: () => undefined,
});

const StoreProvider: FC<ProviderType> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = () => servicesUser.getAll().then((data) => setUsers(data));

  return (
    <StoreContext.Provider value={{ users, loadUsers }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };