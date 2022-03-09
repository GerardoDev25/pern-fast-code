import { response, request } from 'express';

export const getAllTasks = async (req = request, res = response) => {
  res.send('retrieving a list task');
};

export const getOneTask = async (req = request, res = response) => {
  res.send('retrieving a single task');
};

export const createTask = async (req = request, res = response) => {
  res.send('creating a task');
};
export const updateTask = async (req = request, res = response) => {
  res.send('updating a task');
}

export const deleteTask = async (req = request, res = response) => {
  res.send('deleting a task');
}
