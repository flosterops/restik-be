const express = require("express");
const cors = require("cors");
const db = require("./models");
const useRoutes = require("./routes");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

const app = express();

app.use(cors());
app.use(express.json());

useRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log("It is working");
});
