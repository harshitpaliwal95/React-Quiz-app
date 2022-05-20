import { QuizCard } from "../../components";

export const Category = () => {
  return (
    <main>
      <div className="heading-x-lg">Anime Quizzes</div>
      <div className="grid-two">
        <QuizCard />
        <QuizCard />
      </div>
    </main>
  );
};
