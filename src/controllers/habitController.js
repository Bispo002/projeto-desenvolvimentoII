const Habit = require('../models/Habit');

exports.createHabit = async (req, res) => {
  try {
    const habit = await habit.create(req.body);
    res.status(201).json({ sucesso: true, dados: Habit });
  } catch (error){
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json({ sucesso: true, quantidade: habits.length, dados: habits });
  } catch (error) {
    res.status(500).json({ sucesso: false, erro: error.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!habit) return res.status(404).json({ sucesso: false, erro: 'Hábito não encontrado' });
    res.status(200).json({ sucesso: true, dados: habit });
  } catch (error) {
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) return res.status(404).json({ sucesso: false, erro: 'Hábito não encontrado' });
    res.status(200).json({ sucesso: true, mensagem: 'Hábito removido com sucesso' });
  } catch (error) {
    res.status(400).json({ sucesso: false, erro: error.message });
  }
};
