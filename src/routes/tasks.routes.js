import { Router } from 'express';
import {
  createTask, //
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from '../controllers/tasks.comtroller';

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getOneTask);

router.post('/tasks', createTask);

router.put('/tasks', updateTask);

router.delete('/tasks', deleteTask);

module.exports = router;
