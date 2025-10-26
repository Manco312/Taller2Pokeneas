const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', pokeneaRoutes);

// Health
app.get('/health', (req, res) => {
  res.json({ status: "ok", pid: process.pid, containerId: process.env.HOSTNAME || null });
});

app.listen(PORT, () => {
  console.log(`Pokenea app listening on port ${PORT}`);
});
