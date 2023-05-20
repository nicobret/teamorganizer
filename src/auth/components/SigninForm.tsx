function SigninForm({ handleSubmit }: { handleSubmit: any }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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

        <button
          type="submit"
          className="mt-4 rounded-md bg-blue-500 px-3 py-2 text-white"
        >
          Connexion
        </button>
      </div>
    </form>
  );
}

export default SigninForm;
