const db = require("../data/connection");

module.exports = {
  getProjects,
  findById,
  addProject,

};

function getProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id: id }).first();
}

// function getResources(id) {
//   return db("project-resources as pr")
//     .select("r.name as resource_name", "r.description as resource_description")
//     .join("resources as r", "pr.resource_id", "r.id")
//     .where("pr.project_id", id);
// }

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then((id) => {
            return findById(id)
        })
}

// function getTasks(id) {
//     return db('tasks')
//         .select(
//             'projects.name', 
//             'projects.description as project_description',
//             'tasks.notes',
//             'tasks.id',
//             'tasks.project_id')
//       .join('projects', 'tasks.project_id', 'projects.id')
//       .where({ id: id })
// }
