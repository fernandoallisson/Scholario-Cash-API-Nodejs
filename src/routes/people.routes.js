const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;

  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com id ${result.insertId}.`,
    });
  } catch (error) {
    console.error(`Erro: ${error}`);
    res.status(500).json({
      message: 'Ocorreu um erro ao cadastrar uma pessoa',
    });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [data] = await peopleDB.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error(`Erro na leitura dos dados. Erro: ${error}`);
    res.status(500).json({ message: error.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
    const [[peopleFilter]] = await peopleDB.findById(id);
    if (peopleFilter) {
      res.status(200).json(peopleFilter);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (error) {
    console.error(`Erro na busca dos dados. Erro: ${error}`);
      res.status(500).json({ message: error.sqlMessage });
  }
});

module.exports = router;