const express = require("express");
const router = express.Router();

const Resources = require("./resourcesModel");

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.status(200).json({ data: resources });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  Resources.find()
    .then((resource) => {
      if (!resource) {
        res.status(404).json({ message: "file does not exist" });
      } else {
        res.status(200).json({ data: resource });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  Resources.add(newResource)
    .then((resource) => {
      res.status(201).json({ data: resource });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
