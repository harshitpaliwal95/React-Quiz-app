export interface AuthBody {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
}
export interface CategoryType {
  _id?: string;
  categoryName: string;
  img: string;
}

export interface QuizState {
  isLoading: boolean;
  allQuiz: string[];
  categoryQuiz: string[];
  quizAns: null;
  error: string | null;
  subQuiz: string[];
  selectedMcq: string[];
}
