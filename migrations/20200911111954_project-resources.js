exports.up = function (knex) {
  return knex.schema.createTable("project-resources", (tbl) => {
    tbl.increments();
    tbl.integer('project_id').unsigned().notNullable().references("id").inTable("projects");
    tbl
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project-resources");
};
