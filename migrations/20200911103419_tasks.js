exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments();
    tbl.string("description", 100).unique().notNullable();
    tbl.string("notes", 500);
    tbl.boolean("completed").notNullable();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
