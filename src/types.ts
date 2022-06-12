export interface AuthBody {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
}
export type CategoryType = {
  _id?: string;
  categoryName: string;
  img: string;
};

export interface QuizState {
  isLoading: boolean;
  allQuiz: string[];
  categoryQuiz: string[];
  quizAns: null;
  error: string | null;
  subQuiz: string[];
  selectedMcq: string[];
  result: string[];
}

export interface Authstate {
  isLoading: boolean;
  isAuth: boolean;
  userName: string | null;
  encodedToken: any;
  error: string | null;
  darkMode: boolean;
}

export type mcqsType = {
  _id: any;
  question: string;
  options: string[];
  answer: string;
};

export type quizeType = {
  _id: any;
  title: string;
  img: string;
  totalScore: number;
  mcqs: mcqsType[];
  categoryName: string;
};
