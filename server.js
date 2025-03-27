const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// ใช้งาน cors เพื่อให้สามารถเชื่อมต่อจาก Vue.js ได้
app.use(cors());
app.use(express.json());  // รองรับการรับข้อมูลในรูปแบบ JSON

// ข้อมูลตัวอย่าง (ในการทำงานจริงสามารถใช้ฐานข้อมูลได้)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// ดึงข้อมูลทั้งหมด (GET)
app.get('/items', (req, res) => {
  res.json(items);
});

// เพิ่มข้อมูล (POST)
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.json(newItem);  // ส่งกลับข้อมูลที่เพิ่มเข้าไป
});

// อัปเดตข้อมูล (PUT)
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = items.find(item => item.id === itemId);
  if (updatedItem) {
    updatedItem.name = req.body.name;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// ลบข้อมูล (DELETE)
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);
  res.json({ message: 'Item deleted' });
});

// เริ่มต้น server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
