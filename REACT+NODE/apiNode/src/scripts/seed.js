const db = require("../db")(async () => {
  try {
    await db("devopsMovies").insert({ name: "Star wars" });
    await db("devopsMovies").insert({ realisator: "Georges Lucas" });
    console.log("added movies ! ");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
