import { useState } from "react";
import * as Realm from "realm-web";
import {
  loginEmailPassword,
  registerEmailPassword,
} from "../services/realm.service";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";

type LoginProps = {
  setUser: (user: Realm.User) => void;
};

const Signin = ({ setUser }: LoginProps) => {
  const [open, setOpen] = useState(false);

  async function handleSubmitRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const passwordConfirmation = e.currentTarget.passwordConfirmation.value;
    if (password !== passwordConfirmation) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    await registerEmailPassword(email, password);
    const user = await loginEmailPassword(email, password);
    setUser(user);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const user = await loginEmailPassword(email, password);
    setUser(user);
  }

  return (
    <div className="bg-gray-100 p-4">
      <header>
        <h1>Five inclusif</h1>
      </header>
      <main>
        {!open && (
          <div>
            <h2>Connexion</h2>
            <SigninForm handleSubmit={handleSubmit} />
            <button onClick={() => setOpen(!open)} className="text-blue-500">
              Je n'ai pas de compte
            </button>
          </div>
        )}

        {open && (
          <div>
            <h2>Créer un compte</h2>
            <SignupForm handleSubmitRegister={handleSubmitRegister} />
            <button onClick={() => setOpen(!open)} className="text-blue-500">
              Retour
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Signin;
