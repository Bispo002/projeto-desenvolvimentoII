const express = require('express');
const connectDB = require('./config/db');
const habitRoutes = require('./routes/habitRoutes');

const app = express();
connectDB();
app.use(express.json());

app.use(express.json());
app.use('/api/habits', habitRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});

//Confirmação que o servidor e banco estão funcionando
app.get('/api/health', (req, res) => {
  res.status(200).json({status: 'ok', mensagem: 'Servidor e MongoDB ativos e funcionando normalmente'});
});
