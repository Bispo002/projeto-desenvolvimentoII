const Habit = require('../models/Habit');

// CREATE: Criar novo hábito
exports.createHabit = async (req, res) => {
  try {
    const novoHabito = await Habit.create(req.body);
    res.status(201).json({ sucesso: true, dados: novoHabito });
  } catch (error) {
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};

// READ: Listar todos os hábitos
exports.getHabits = async (req, res) => {
  try {
    const habitos = await Habit.find();
    res.status(200).json({ sucesso: true, quantidade: habitos.length, dados: habitos });
  } catch (error) {
    res.status(500).json({ sucesso: false, erro: error.message });
  }
};

// UPDATE: Atualizar hábito por ID
exports.updateHabit = async (req, res) => {
  try {
    const habitoAtualizado = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!habitoAtualizado) {
      return res.status(404).json({ sucesso: false, erro: 'Hábito não encontrado' });
    }
    res.status(200).json({ sucesso: true, dados: habitoAtualizado });
  } catch (error) {
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};

// DELETE: Remover hábito por ID
exports.deleteHabit = async (req, res) => {
  try {
    const habitoDeletado = await Habit.findByIdAndDelete(req.params.id);
    if (!habitoDeletado) {
      return res.status(404).json({ sucesso: false, erro: 'Hábito não encontrado' });
    }
    res.status(200).json({ sucesso: true, mensagem: 'Hábito removido com sucesso' });
  } catch (error) {
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};
