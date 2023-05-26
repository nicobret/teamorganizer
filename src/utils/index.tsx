async function fetchUserData() {
  try {
    const data = await fetch(
      "https://eu-west-2.aws.data.mongodb-api.com/app/data-ugzoo/endpoint/data/v1/action/find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key": import.meta.env.VITE_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          collection: "users",
          database: "teamorganizer",
          dataSource: import.meta.env.VITE_DATA_SOURCE,
          filter: {},
        }),
      }
    );
    const json = await data.json();
    console.log(json);
    return json.documents;
  } catch (error) {
    console.log(error);
    return JSON.stringify(error);
  }
}
