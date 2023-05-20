import * as Realm from "realm-web";

type LoginProps = {
  app: Realm.App;
  setUser: (user: Realm.User) => void;
};

const Signin = ({ app, setUser }: LoginProps) => {
  const loginAnonymous = async () => {
    const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
};

export default Signin;
