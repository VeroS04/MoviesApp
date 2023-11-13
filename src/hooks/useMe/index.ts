import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services/users";
import { LoginForm, User } from "../../types";

const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  const login = async ({ email, pass }: LoginForm) => {
    const user = await servicesUser.getBy("email", email);

    if (user && user.password === pass) {
      const { id, name, lastname } = user;
      const token = tokenGenerator();
      servicesUser.update({ id, token });

      localStorage.setItem("token", token);

      setMe({ id, name, lastname, email });
    } else {
      servicesUser.update({ id: me?.id, token: null });
      setMe(undefined);
    }
  };

  const signup = (user: Omit<User, "id">) => {};

  const forgotPassword = () => {};

  const loginWithToken = async () => {
    const token = localStorage.getItem("token");

    if (token && !me) {
      const user = await servicesUser.getBy("token", token);
      if (user) {
        setMe({
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        });
      }
    }
  };

  const logout = async () => {
    await servicesUser.update({ id: me?.id, token: null });
    setMe(undefined);
  };

  return { me, login, signup, forgotPassword, logout, loginWithToken };
};

export { useMe };
