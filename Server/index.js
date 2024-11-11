const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;
app.use(cors());

const users = {
  23: {
    name: "John",
    age: 29,
  },
  45: {
    name: "Jane",
    age: 42,
  },
  78: {
    name: "Jack",
    age: 35,
  },
  13: {
    name: "Subi",
    age: 34,
  },
  14: {
    name: "Raneesh",
    age: 36,
  },
  15: {
    name: "Thanvi",
    age: 7,
  },
};

app.get("/name:/name", (req, res) => {
  const { names } = req.params;
  console.log("fetchingb data");

  res.status(200).json({ user: users[name] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
