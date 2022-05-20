import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface quizState {
  isLoading: boolean;
  allQuiz: string[];
  categoryQuiz: string[];
  QuizAns: null;
  error: string | null;
}

const initialState = {
  isLoading: false,
  allQuiz: [],
  categoryQuiz: [],
  QuizAns: null,
  error: null,
};

export const getCategory = createAsyncThunk(
  "quiz/getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data.categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, actiion: any) => {
        state.isLoading = false;
        state.categoryQuiz = actiion.payload;
      })
      .addCase(getCategory.rejected, (state, action: any) => {
        state.error = action.message;
      });
  },
});

export default quizSlice.reducer;
