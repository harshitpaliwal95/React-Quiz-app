import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../types";
import axios from "axios";

const initialState: QuizState = {
  isLoading: false,
  allQuiz: [],
  categoryQuiz: [],
  quizAns: null,
  error: null,
  subQuiz: [],
  selectedMcq: [],
  result: [],
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
    selectedMcq: (state, { payload }: any) => {
      const quizArr: any = state.subQuiz.find(
        (data: any) => data.title === payload
      );
      state.selectedMcq = quizArr.mcqs;
    },
    finnalResult: (state, { payload }: any) => {
      const que: any = state.selectedMcq.find(
        (data: any) => data._id === payload._id
      );
      state.result.push({ ...que, userAns: payload.selectedOpt });
    },
    clearMcq: (state) => {
      state.selectedMcq = [];
    },
    clearResult: (state) => {
      state.result = [];
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
      .addCase(getAllQuiz.rejected, (state, { payload }: any) => {
        state.error = payload;
      });
  },
});
export const { subQuiz, selectedMcq, finnalResult, clearMcq, clearResult } =
  quizSlice.actions;
export default quizSlice.reducer;
