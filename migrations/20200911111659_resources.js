exports.up = function(knex) {
    return knex.schema.createTable("resources", (tbl) => {
        tbl.increments();
        tbl.string("name", 100).unique().notNullable();
        tbl.string("description", 500);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources");
};
