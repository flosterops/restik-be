const user = require("../controllers/user.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/", user.create);
  router.get("/:id", user.findOne);
  router.delete("/:id", user.remove);
  router.put("/:id", user.update);
  app.use("/api/user", router);
};
