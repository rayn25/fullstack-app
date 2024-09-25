import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios.js";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/register`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/login`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const authUser = createAsyncThunk(
  "users/authUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/users/auth`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  "users/logoutUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/logout`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
