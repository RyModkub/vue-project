const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET
app.get("/items", (req, res) => {
  res.json(items);
});

// POST
app.post("/items", (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name };
  items.push(newItem);
  res.json(newItem);
});

// PUT
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((i) => i.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
