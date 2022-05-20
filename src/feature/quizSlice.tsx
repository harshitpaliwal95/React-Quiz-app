import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface quizState {
  allQuiz: string | null;
  categoryQuiz: string[] | null;
  QuizAns: null;
}

const initialState = {
  allQuiz: null,
  categoryQuiz: null,
  QuizAns: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

export default quizSlice.reducer;
