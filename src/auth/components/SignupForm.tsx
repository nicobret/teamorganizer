function SignupForm({ handleSubmitRegister }: { handleSubmitRegister: any }) {
  return (
    <form onSubmit={(e) => handleSubmitRegister(e)}>
      <div className="my-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="my-4 flex flex-col">
        <label htmlFor="passwordConfirmation">Confirmer le mot de passe</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          className="rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-md bg-blue-500 px-3 py-2 text-white"
      >
        Créer un compte
      </button>
    </form>
  );
}

export default SignupForm;
