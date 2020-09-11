exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();
    tbl.string("name", 100).unique().notNullable();
    tbl.string("description", 500);
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
