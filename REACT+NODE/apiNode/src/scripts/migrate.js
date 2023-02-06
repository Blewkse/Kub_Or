const db = require("../db");

async () => {
  try {
    await db.schema.dropTableIfExists("devopsMovies");
    await db.schema
      .withSchema("public")
      .createTable("devopsMovies", (table) => {
        table.increments();
        table.string("name");
        table.string("realisator");
      });
    console.log("Created users table!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
