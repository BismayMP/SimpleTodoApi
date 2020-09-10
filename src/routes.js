const express = require("express");
const router = express.Router();
const { insertTask, getAllTask, updateTask, getTask, deleteTask } = require('./controllers/tasksController')

router.get("/", async (req, res, next) =>
  res.json(await getAllTask())
);

router.get('/:id', async (req, res, next) =>
  res.json(await getTask(req.params.id))
)

router.put('/:id', async (req, res, next) =>
  res.json(await updateTask(req.params.id, req.body ))
)

router.post('/', async (req, res, next) =>
  res.json(await insertTask(req.body))
)

router.delete('/:id', async (req, res, next) =>
  res.json(await deleteTask(req.params.id))
)

module.exports = router;
