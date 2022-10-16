const db = require("../models");
const User = db.User;

const create = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send({
      message: "User should have first name and last name",
    });
  }

  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    token: "09129680-155c-4877-a322-81edc900e791",
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while Adding a user.",
      });
    });
};

const update = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send({
      message: "User should have first name and last name. ",
    });
  }

  const { id } = req.params;

  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  User.update(user, { where: { id } })
    .then(([affectedCount]) => {
      if (affectedCount === 1) {
        res.send({
          message: "User was successfully updated.",
        });
      } else {
        res.status(400).send({
          message: "Can not update User with id = " + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while Updating a user with id = " + id + " .",
      });
    });
};

const remove = async (req, res) => {
  const { id } = req.params;

  User.destroy({
    where: { id },
  })
    .then((affectedCount) => {
      if (affectedCount === 1) {
        res.send({
          message: "User was successfully deleted",
        });
      } else {
        res.status(400).send({
          message: "Can not delete user with id = " + id,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Could not delete Character with id = " + id + " .",
      });
    });
};

const findOne = async (req, res) => {
  const { id } = req.params;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: "Can not find user with id = " + id + " .",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error retrieving Character with id = " + id + " .",
      });
    });
};

module.exports = { update, create, remove, findOne };
