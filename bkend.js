const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = 'inventory.json';

// Helper function to read inventory data
function readInventoryData() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write inventory data
function writeInventoryData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// GET: Retrieve all inventory items
app.get('/inventory', (req, res) => {
  const inventory = readInventoryData();
  res.json(inventory);
});

// POST: Add a new inventory item
app.post('/inventory', (req, res) => {
  const newItem = req.body;
  const inventory = readInventoryData();
  inventory.push(newItem);
  writeInventoryData(inventory);
  res.json(newItem);
});

// PUT: Update an existing inventory item
app.put('/inventory/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  let inventory = readInventoryData();

  inventory = inventory.map((item) =>
    item.id === itemId ? { ...item, ...updatedItem } : item
  );

  writeInventoryData(inventory);
  res.json(updatedItem);
});

// DELETE: Remove an inventory item
app.delete('/inventory/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  let inventory = readInventoryData();

  inventory = inventory.filter((item) => item.id !== itemId);

  writeInventoryData(inventory);
  res.json({ message: 'Item deleted successfully' });
});

// GET: Analytics data
app.get('/analytics', (req, res) => {
  const inventory = readInventoryData();

  // Total items per category
  const categoryCounts = inventory.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.quantity;
    return acc;
  }, {});

  // Top 3 most frequently stocked items
  const sortedItems = inventory
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 3);

  // Total inventory value
  const totalValue = inventory.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Low stock alerts
  const lowStockThreshold = 10;
  const lowStockItems = inventory.filter(
    (item) => item.quantity < lowStockThreshold
  );

  res.json({
    categoryCounts,
    topItems: sortedItems,
    totalValue,
    lowStockItems,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});