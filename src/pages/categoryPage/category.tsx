import { useSelector } from "react-redux";
import { QuizCard } from "../../components";
import { RootState } from "../../store";

export const Category = () => {
  const { quiz } = useSelector((store: RootState) => store);

  return (
    <main>
      <div className="heading-x-lg">Quizzes</div>
      <div className="grid-two">
        {quiz.subQuiz.map((data: any) => (
          <QuizCard key={data._id} data={data} />
        ))}
      </div>
    </main>
  );
};
