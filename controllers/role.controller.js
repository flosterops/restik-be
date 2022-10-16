const db = require("../models");
const Role = db.Role;

const create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Can not create status without name",
    });
  }

  const role = { name: req.body.name };

  Role.create(role)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server error",
      });
    });
};

const update = (req, res) => {
  const { id } = req.params;

  if (!req.body.name) {
    res.status(400).send({
      message: "Role should has name",
    });
  }

  const role = { name: req.body.name };

  Role.update(role, { where: { id } })
    .then(([affectedCount]) => {
      if (affectedCount === 1) {
        res.send({
          message: "Successfully updated",
        });
      } else {
        res.send(400).send({
          message: "Failed to update",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server error",
      });
    });
};

const remove = (req, res) => {
  const { id } = req.params;

  Role.destroy({ where: { id } })
    .then((affectedCount) => {
      if (affectedCount === 1) {
        res.send({
          message: "Deleted",
        });
      } else {
        res.status(400).send({
          message: "Failed to delete",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server error",
      });
    });
};

const getAll = (req, res) => {
  Role.findAll({ where: "" })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server error",
      });
    });
};

module.exports = { create, update, remove, getAll };
