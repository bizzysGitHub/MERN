import axios from 'axios';

const GOAL_API = '/api/goals';

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(GOAL_API, config);

  return response.data;
};
const createGoal = async (goalsData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(GOAL_API, goalsData, config);

  return response.data;
};
const changeGoal = async (changeGoalData, token) => {
  const {id, text} = changeGoalData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(GOAL_API + `/${id}`, {text:text}, config);

  return response.data
};
const deleteGoal = async (goalToBeDeletedID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    GOAL_API + `/${goalToBeDeletedID}`,
    config
  );

  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
  changeGoal,
  deleteGoal,
};

export default goalService;
