const role = require("../controllers/role.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/", role.create);
  router.get("/", role.getAll);
  router.delete("/:id", role.remove);
  router.put("/:id", role.update);
  app.use("/api/role", router);
};
