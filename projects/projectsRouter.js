const express = require("express");
const router = express.Router();

const Projects = require("./projectsModel");

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json({ data: projects });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  Projects.findById()
    .then((project) => {
      if (!project) {
        res.status(404).json({ message: "file does not exist" });
      } else {
        res.status(200).json({ data: project });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.addProject(newProject)
    .then((project) => {
      res.status(201).json({ data: project });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
