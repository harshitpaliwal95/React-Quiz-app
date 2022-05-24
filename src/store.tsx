import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./feature/quizSlice";
import authReducer from "./feature/authSlice";
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
