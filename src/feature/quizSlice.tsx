import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface quizState {
  isLoading: boolean;
  allQuiz: string[];
  categoryQuiz: string[];
  quizAns: null;
  error: string | null;
  subQuiz: string[];
}

const initialState = {
  isLoading: false,
  allQuiz: [],
  categoryQuiz: [],
  quizAns: null,
  error: null,
  subQuiz: [],
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
export const getAllQuiz = createAsyncThunk(
  "quiz/getAllQuiz",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/quizzes");
      return response.data.quizes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    subQuiz: (state, { payload }: any) => {
      state.subQuiz = state.allQuiz.filter(
        (data: any) => data.categoryName === payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryQuiz = action.payload;
      })
      .addCase(getCategory.rejected, (state, action: any) => {
        state.error = action.message;
      });
    builder
      .addCase(getAllQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllQuiz.fulfilled, (state, actiion: any) => {
        state.isLoading = false;
        state.allQuiz = actiion.payload;
      })
      .addCase(getAllQuiz.rejected, (state, action: any) => {
        state.error = action.message;
      });
  },
});
export const { subQuiz } = quizSlice.actions;
export default quizSlice.reducer;
