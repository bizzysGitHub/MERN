/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import goalService from './goalService';

const initialState = {
  goals: [],
  // i think i can remove these later with react router
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getAllGoals = createAsyncThunk(
  'goals/getAllGoal',
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.getGoals(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const makeNewGoal = createAsyncThunk(
  'goals/makeNewGoal',
  async (goal, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.createGoal(goal, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const editGoal = createAsyncThunk(
  'goals/editGoal',
  async (goalToBeEditedID, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await goalService.changeGoal(goalToBeEditedID, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  'goals/deleteGoal',
  async (goalWeWantToDelete, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;

      return await goalService.deleteGoal(goalWeWantToDelete, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getAllGoals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.goals = [];
      })
      .addCase(makeNewGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makeNewGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(makeNewGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.map((goal) => goal._id === action.payload._id ? action.payload : goal
        );
      })
      .addCase(editGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        );
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
