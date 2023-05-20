import * as Realm from "realm-web";

const realmApp = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

async function registerEmailPassword(email: string, password: string) {
  // Register the user and return the logged in user
  const user = await realmApp.emailPasswordAuth.registerUser({ email, password });
  return user;
}

async function loginEmailPassword(email: string, password: string) {
  // Create an email/password credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  // Authenticate the user
  const user = await realmApp.logIn(credentials);
  // `App.currentUser` updates to match the logged in user
  // console.assert(user.id === app.currentUser.id);
  return user;
}

async function logout() {
  await realmApp.currentUser?.logOut();
}

export { realmApp, registerEmailPassword, loginEmailPassword, logout };