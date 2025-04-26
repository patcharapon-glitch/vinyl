const express = require('express');
const app = express();
const port = 3000;

// สร้าง route สำหรับหน้าแรก
app.get('/', (req, res) => {
  res.send('Hello, welcome to my music app!');
});

// สั่งให้ server รันที่ port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
