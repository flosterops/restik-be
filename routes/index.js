const userRouter = require("../routes/user.routes");
const roleRouter = require("../routes/role.routes");

module.exports = (app) => {
  userRouter(app);
  roleRouter(app);
};
