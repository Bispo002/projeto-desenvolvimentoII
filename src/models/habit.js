const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome do hábito é obrigatório'],
    trim: true
  },

  frequencia: {
    type: String,
    enum: ['diaria', 'semanal'],
    default: 'diaria'
  },

  metaDiaria: {
    type: Number,
    default: 1
  },

  criadoEm: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Habit', habitSchema);
