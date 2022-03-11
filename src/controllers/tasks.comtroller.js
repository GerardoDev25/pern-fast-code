import db from '../database';
import { response, request } from 'express';

export const getAllTasks = async (req = request, res = response) => {
  res.send('retrieving a list task');
};

export const getOneTask = async (req = request, res = response) => {
  res.send('retrieving a single task');
};

export const createTask = async (req = request, res = response) => {
  try {
    const { title, descriptin } = req.body;

    const result = await db.query('insert into task (title, descriptin) values($1, $2) returning *', [title, descriptin]);

    console.log(result);
    res.json({ roes: result.rows[0] });
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};
export const updateTask = async (req = request, res = response) => {
  res.send('updating a task');
};

export const deleteTask = async (req = request, res = response) => {
  res.send('deleting a task');
};
