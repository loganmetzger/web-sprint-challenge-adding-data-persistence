exports.up = function (knex) {
  return knex.schema.createTable("project-resources", (tbl) => {
    tbl.increments();
    tbl.integer().unsigned().notNullable().references("id").inTable("projects");
    tbl
      .integer()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project-resources");
};
