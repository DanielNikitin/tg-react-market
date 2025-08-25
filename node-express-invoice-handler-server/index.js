const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/create-order', (req, res) => {
  // Обработка запроса
  console.log('Запрос на создание заказа:', req.body);

  // Отправляем ответ "заказ получен"
  res.status(200).send('Заказ получен!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
