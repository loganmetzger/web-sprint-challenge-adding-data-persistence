const db = require("../data/connection");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("tasks")
    .select(
      "projects.name",
      "projects.description as project_description",
      "tasks.notes",
      "tasks.id",
      "tasks.project_id"
    )
    .join("projects", "tasks.project_id", "projects.id");
}

function findById(id) {
  return db("tasks")
    .select(
      "projects.name",
      "projects.description as project_description",
      "tasks.notes",
      "tasks.id",
      "tasks.project_id"
    )
    .join("projects", "tasks.project_id", "projects.id")
    .where("tasks.id", id)
    .first();
}

function add(task) {
  return db("tasks")
    .insert(task, "id")
}
