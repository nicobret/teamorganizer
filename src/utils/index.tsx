async function fetchUserData() {
  try {
    const data = await fetch(
      // "https://data.mongodb-api.com/app/data-ugzoo/endpoint/data/v1/action/find",
      "https://eu-west-2.aws.data.mongodb-api.com/app/data-ugzoo/endpoint/data/v1/action/find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "wEmQ5uA5klUqcJCdoBbquhJ1ExCQuudQhTpyLNapDcsHegcuHiZxVadg3CXbxNUj",
          Accept: "application/json",
        },
        body: JSON.stringify({
          collection: "users",
          database: "team-organizer",
          dataSource: "Cluster0",
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
