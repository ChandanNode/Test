
const express = require("express");

const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Chandan",
    age: 18
  },
  {
    id: 2,
    name: "Rahul",
    age: 20
  }
];

// GET - Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET - Get user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// POST - Create user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT - Update complete user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users[index] = {
    id,
    ...req.body
  };

  res.json(users[index]);
});

// PATCH - Update specific fields
app.patch("/api/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  Object.assign(user, req.body);

  res.json(user);
});

// DELETE - Delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted successfully"
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
