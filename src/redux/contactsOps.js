import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6713516f6c5f5ced662606c3.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contact");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contact/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post(`/contact`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// export const fetchContacts = () => async (dispatch) => {
//   const { data } = await axios.get("/contact");
//   dispatch(fetchContactsSuccess(data));
// };

// export const deleteContactThunk = (id) => async (dispatch) => {
//   const { data } = await axios.delete(`/contact/${id}`);
//   dispatch(deleteContact(data.id));
// };

// export const addContactThunk = (body) => async (dispatch) => {
//   const { data } = await axios.post(`/contact`, body);
//   dispatch(addContact(data));
// };
